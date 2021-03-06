import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service.js';
@Component({
  selector: 'app-prospect-sign-up',
  templateUrl: './prospect-sign-up.component.html',
  styleUrls: ['./prospect-sign-up.component.scss'],
})
export class ProspectSignUpComponent implements OnInit {
  haveRuc: any[] = ['Si', 'No'];
  emails: any[] = [
    {
      label: 'gmail.com',
      value: 'gmail',
    },
    {
      label: 'yahoo.com',
      value: 'yahoo',
    },
    {
      label: 'outlook.com',
      value: 'outlook',
    },
    {
      label: 'otros',
      value: 'otro',
    },
  ];
  emailSelected: any = this.emails[0];
  departaments: any[] = [];
  provincies: any[] = [];
  districts: any[] = [];

  constructor(private fs: FirebaseService) {
    this.getDepartaments();
  }

  ngOnInit(): void {}

  setEmailValue(valueEmail: string) {
    this.emailSelected = valueEmail;
  }

  getDepartaments() {
    this.fs
      .getPlacesBy('departaments')
      .subscribe((data: any) => (this.departaments = data));
  }

  getProvincies(idDep: string) {
    this.fs
      .getPlacesBy('provincies')
      .subscribe((data: any) => (this.provincies = data[idDep]));
  }

  getDistricts(idProv: string) {
    this.fs
      .getPlacesBy('districts')
      .subscribe((data: any) => (this.districts = data[idProv]));
  }
}
