import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { CustomersService } from '../service-signup/customers.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';


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


  constructor(private customersService:CustomersService,
    private snackBar: MatSnackBar ) {

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
  
openSnackBar(message: string,action: string | undefined){
  this.snackBar.open(message, action);
}
  
  
}
