import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SupplyComponent } from './components/supply/supply.component';
import { CordsComponent } from './components/cords/cords.component';
import { CordComponent } from './components/cord/cord.component';
import { NewCordComponent } from './components/new-cord/new-cord.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'supply', component: SupplyComponent },
  { path: 'cords', component: CordsComponent },
  { path: 'cord', component: CordComponent },
  { path: 'new-cord', component: NewCordComponent},
  { path: '', redirectTo: 'supply', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
