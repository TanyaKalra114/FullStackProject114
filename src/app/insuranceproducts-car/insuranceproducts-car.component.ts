import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-insuranceproducts-car',
  templateUrl: './insuranceproducts-car.component.html',
  styleUrls: ['./insuranceproducts-car.component.css']
})
export class InsuranceproductsCarComponent  {
  submit(login: any){
    console.log("form submitted", login)
  }
    


}
