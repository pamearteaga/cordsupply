import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SupplyComponent } from './components/supply/supply.component';
import { CordsComponent } from './components/cords/cords.component';
import { CordComponent } from './components/cord/cord.component';
import { NewCordComponent } from './components/new-cord/new-cord.component';
import { LoggedGuard } from './guards/logged.guard';


const routes: Routes = [
  /* { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'supply', component: SupplyComponent, canActivate: [LoggedGuard] },
  { path: 'cords', component: CordsComponent, canActivate: [LoggedGuard] },
  { path: 'cord', component: CordComponent, canActivate: [LoggedGuard]  },
  { path: 'new-cord', component: NewCordComponent, canActivate: [LoggedGuard] },
  { path: '', redirectTo: 'cords', pathMatch: 'full' } */
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'supply', component: SupplyComponent, children: [
    { path: 'cords', component: CordsComponent },
    { path: 'cord/:id', component: CordComponent },
    { path: '**', redirectTo: 'cords', pathMatch: 'full' }
  ] },
  { path: 'new-cord', component: NewCordComponent },
  { path: '**', redirectTo: 'supply', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
