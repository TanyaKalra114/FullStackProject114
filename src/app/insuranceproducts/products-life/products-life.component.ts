import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-life',
  templateUrl: './products-life.component.html',
  styleUrls: ['./products-life.component.css']
})
export class ProductsLifeComponent {

  submit(login: any){
    console.log("form submitted", login)
  }

}
