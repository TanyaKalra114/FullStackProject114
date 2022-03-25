import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FileclaimComponent } from './fileclaim/fileclaim.component';
import { HomeComponent } from './home/home.component';

import { InsuranceproductsComponent } from './insuranceproducts/insuranceproducts.component';
import { SignupComponent } from './signup/signup.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { LoginComponent } from './login/login.component';
import { ProductsCarComponent} from './insuranceproducts/products-car/products-car.component';
import { ProductsHomeComponent} from './insuranceproducts/products-home/products-home.component';
import { ProductsLifeComponent } from './insuranceproducts/products-life/products-life.component';
import { ClaimNowComponent } from './fileclaim/claim-now/claim-now.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'insuranceproducts', 
 
  children:[
    {path:'', component: InsuranceproductsComponent},
  {path:'products-car',component:ProductsCarComponent},
  {path:'products-home',component:ProductsHomeComponent},
  {path:'products-life',component:ProductsLifeComponent}
]

},


  {path:'fileclaim',
  children:[
  {path:'', component: FileclaimComponent},
  {path:'claim-now',component:ClaimNowComponent}
  ]
  },
  {path:'signup', component:SignupComponent},
  {path:'login',component:LoginComponent},
  { path: '**', component: NoPageFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
