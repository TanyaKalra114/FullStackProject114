import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FileclaimComponent } from './fileclaim/fileclaim.component';
import { HomeComponent } from './home/home.component';
import { InsuranceproductsCarComponent } from './insuranceproducts-car/insuranceproducts-car.component';
import { InsuranceproductsHomeComponent } from './insuranceproducts-home/insuranceproducts-home.component';
import { InsuranceproductsLifeComponent } from './insuranceproducts-life/insuranceproducts-life.component';
import { InsuranceproductsComponent } from './insuranceproducts/insuranceproducts.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'insuranceproducts', 
  component: InsuranceproductsComponent,
  children:[
  {path:'insuranceproducts-car',component:InsuranceproductsCarComponent},
  {path:'insuranceproducts-home',component:InsuranceproductsHomeComponent},
  {path:'insuranceproducts-life',component:InsuranceproductsLifeComponent}
]

},


  {path:'fileclaim', component: FileclaimComponent},
  {path:'signup', component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
