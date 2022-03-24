import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { CustomersService } from '../service-signup/customers.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
title='customers';
customers:Customer[]=[];
customer:Customer={
  customer_id:'',
  customer_name:'',
  gender:'',
  date_of_birth:'',
  phone_no:'',
  email:''

}
  constructor(private customersService:CustomersService) {

   }

  ngOnInit(): void {
this.getAllCustomers();

  }

  getAllCustomers(){
    this.customersService.getAllCustomers()
    .subscribe(
      response =>{
        this.customers=response;
        

      }
    )

  }

  onSubmit(){

this.customersService.addCustomer(this.customer)
.subscribe(
  response=>{
    console.log(response);
    this.getAllCustomers();
    this.customer={
      customer_id:'',
  customer_name:'',
  gender:'',
  date_of_birth:'',
  phone_no:'',
  email:''
    }

  }
)
  }
}
