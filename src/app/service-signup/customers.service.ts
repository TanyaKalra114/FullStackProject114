import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Customer} from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  baseUrl='https://localhost:7187/api/Customer';
  constructor(private http:HttpClient) { }

  //get all customers
  getAllCustomers():Observable<Customer[]>{
return this.http.get<Customer[]>(this.baseUrl);
  }

  addCustomer(customer:Customer):Observable <Customer>{
    customer.customer_id='00000000-0000-0000-0000-000000000000';
   return this.http.post<Customer>(this.baseUrl,customer);
  }
}
