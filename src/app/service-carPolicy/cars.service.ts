import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import {Car} from '../models/carPolicy.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  baseUrl='https://localhost:7187/api/Cars';
  constructor(private http:HttpClient) { }

  //get all cars
  getAllCars():Observable<Car[]>{
return this.http.get<Car[]>(this.baseUrl);
  }

  addCar(car:Car):Observable <Car>{
    car.policy_id='00000000-0000-0000-0000-000000000000';
   return this.http.post<Car>(this.baseUrl,car);
  }
}
