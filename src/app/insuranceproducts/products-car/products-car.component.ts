import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-car',
  templateUrl: './products-car.component.html',
  styleUrls: ['./products-car.component.css']
})
export class ProductsCarComponent  {

  submit(login: any){
    console.log("form submitted", login)
  }

}
