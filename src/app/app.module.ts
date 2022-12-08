import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchPatientComponent } from './search-patient/search-patient.component';

let myRoutes:Routes = [
  {
    path:"",
    component:AddPatientComponent
  },
  {
    path:"view",
    component:ViewPatientComponent
  },
  {
    path:"search",
    component:SearchPatientComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    ViewPatientComponent,
    NavbarComponent,
    SearchPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
