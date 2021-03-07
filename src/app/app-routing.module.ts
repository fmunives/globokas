import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FailureComponent } from './failure/failure.component';
import { LoginComponent } from './login/login.component';
import { ProspectSignUpComponent } from './prospect-sign-up/prospect-sign-up.component';
import { SuccessComponent } from './success/success.component';
import { ValidationSunatComponent } from './validation-sunat/validation-sunat.component';

const routes: Routes = [
  {
    path: 'register',
    component: ProspectSignUpComponent,
  },
  {
    path: 'success',
    component: SuccessComponent,
  },
  {
    path: 'failure',
    component: FailureComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'validationSunat',
    component: ValidationSunatComponent,
  },
  {
    path: '**',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
