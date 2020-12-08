import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Firebase */
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

/* componentes */
import { LoginComponent } from './components/login/login.component';
import { SupplyComponent } from './components/supply/supply.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { CordsComponent } from './components/cords/cords.component';
import { CordComponent } from './components/cord/cord.component';
import { NewCordComponent } from './components/new-cord/new-cord.component';

/* formularios */
import { ReactiveFormsModule } from '@angular/forms';

/* guards */
import { LoggedGuard } from './guards/logged.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SupplyComponent,
    HeaderComponent,
    RegisterComponent,
    CordsComponent,
    CordComponent,
    NewCordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
  ],
  providers: [LoggedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
