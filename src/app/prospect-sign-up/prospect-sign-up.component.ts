import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service.js';
import { UserModel } from '../model/user.model.js';

const RUC_EXISTS = [
  {
    label: 'Si',
    value: true,
  },
  {
    label: 'No',
    value: false,
  },
];

const DOMAINS = [
  {
    viewValue: 'gmail.com',
    value: 'gmail',
  },
  {
    viewValue: 'yahoo.com',
    value: 'yahoo',
  },
  {
    viewValue: 'outlook.com',
    value: 'outlook',
  },
  {
    viewValue: 'otros',
    value: 'otro',
  },
];

@Component({
  selector: 'app-prospect-sign-up',
  templateUrl: './prospect-sign-up.component.html',
  styleUrls: ['./prospect-sign-up.component.scss'],
})
export class ProspectSignUpComponent implements OnInit {
  client: UserModel = new UserModel();

  emailName: string = '';
  emailDomain: any = '';
  otherEmailDomain: string = '';

  departament: string = '';
  province: string = '';
  district: string = '';
  haveRuc: any[] = RUC_EXISTS;

  domains: any[] = DOMAINS;
  domainSelected: any = this.domains[0].value;

  departaments: any[] = [];
  provinces: any[] = [];
  districts: any[] = [];

  constructor(private fs: FirebaseService, private route: Router) {
    this.getDepartaments();
  }

  ngOnInit(): void {}

  setDomainEmail(domain: any) {
    this.domainSelected = domain;
    console.log('domain selected 2: ', this.domainSelected);
  }

  getDepartaments() {
    this.fs
      .getPlacesBy('departaments')
      .subscribe((data: any) => (this.departaments = data));
  }

  getprovinces(Dep: any) {
    console.log({ Dep });
    this.fs
      .getPlacesBy('provinces')
      .subscribe((data: any) => (this.provinces = data[Dep.id_ubigeo]));
  }

  getDistricts(Prov: any) {
    this.fs
      .getPlacesBy('districts')
      .subscribe((data: any) => (this.districts = data[Prov.id_ubigeo]));
  }

  onSubmit(form: NgForm) {
    this.setProspect(form);

    this.fs.createClient(this.client).subscribe((resp: any) => {
      if (resp.name) {
        this.route.navigate(['/success']);
      } else {
        this.route.navigate(['/failure']);
      }
    });
  }

  private setProspect(form: NgForm) {
    let currentDomain = this.domains.find(
      (item) => item.value === this.domainSelected
    );

    this.client.departament = form.value.departament.nombre_ubigeo;
    this.client.province = form.value.province.nombre_ubigeo;
    this.client.district = form.value.district;
    this.client.email =
      form.value.emailName +
      '@' +
      (this.domainSelected === 'otro'
        ? form.value.otherEmailDomain
        : currentDomain.viewValue);
  }
}
