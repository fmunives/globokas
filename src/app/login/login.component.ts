import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private route: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.route.navigate(['/validationSunat']);
  }
}
