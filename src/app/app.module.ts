 import { NgModule } from '@angular/core';
 import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { InsuranceproductsComponent } from './insuranceproducts/insuranceproducts.component';
import { FileclaimComponent } from './fileclaim/fileclaim.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';

import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { LoginComponent } from './login/login.component';
import { ProductsCarComponent } from './insuranceproducts/products-car/products-car.component';
import { ProductsHomeComponent } from './insuranceproducts/products-home/products-home.component';
import { ProductsLifeComponent } from './insuranceproducts/products-life/products-life.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutusComponent,
    InsuranceproductsComponent,
    FileclaimComponent,
    SignupComponent,
    FooterComponent,
    
    
   
    LoginComponent,
    NoPageFoundComponent,
    ProductsCarComponent,
    ProductsHomeComponent,
    ProductsLifeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
