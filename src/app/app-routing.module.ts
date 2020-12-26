import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SupplyComponent } from './components/supply/supply.component';
import { CordsComponent } from './components/cords/cords.component';
import { CordComponent } from './components/cord/cord.component';
import { LoggedGuard } from './guards/logged.guard';
import { SearchComponent } from './components/search/search.component';
import { FormComponent } from './components/form/form.component';


const routes: Routes = [
  { path: 'supply', component: SupplyComponent, children: [
    { path: 'cords', component: CordsComponent, canActivate: [LoggedGuard] },
    { path: 'cord/:id', component: CordComponent, canActivate: [LoggedGuard] },
    { path: 'search/:term', component: SearchComponent, canActivate: [LoggedGuard] },
    { path: '**', redirectTo: 'cords', pathMatch: 'full' }
  ] },
  { path: 'form', component: FormComponent, children: [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
  ] },
  { path: '**', redirectTo: 'supply', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
