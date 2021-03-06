import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProspectSignUpComponent } from './prospect-sign-up/prospect-sign-up.component';

const routes: Routes = [
  {
    path: 'register',
    component: ProspectSignUpComponent,
  },
  {
    path: '**',
    component: ProspectSignUpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
