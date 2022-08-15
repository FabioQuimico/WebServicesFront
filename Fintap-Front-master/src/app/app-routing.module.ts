import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeExtratoComponent } from './views/pages/home-extrato/home-extrato.component';
import { LoginComponent } from './views/pages/login/login.component';

const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'home-extrato' , component: HomeExtratoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
