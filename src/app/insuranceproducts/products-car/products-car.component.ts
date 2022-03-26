import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/carPolicy.model';
import { CarsService } from '../../service-carPolicy/cars.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-products-car',
  templateUrl: './products-car.component.html',
  styleUrls: ['./products-car.component.css']
})
export class ProductsCarComponent implements OnInit  {

  title='cars';
  cars:Car[]=[];
car:Car={
policy_id:'',
model_no:'',
start_date:'',
end_date:'',
policy_type:''
  

}
   
constructor(private carsService:CarsService,
  private snackBar: MatSnackBar){

}

    ngOnInit(): void {
  this.getAllCars();
  
    }
  
    getAllCars(){
      this.carsService.getAllCars()
      .subscribe(
        response =>{
          this.cars=response;
        }
      )
  
    }
  
    onSubmit(){
  
  this.carsService.addCar(this.car)
  .subscribe(
    response=>{
      console.log(response);
      this.getAllCars();
      this.car={
        policy_id:'',
model_no:'',
start_date:'',
end_date:'',
policy_type:'',
  
        
      }
  
    }
  )
    }
    openSnackBar(message: string,action: string | undefined){
      this.snackBar.open(message, action);
    }
      

}
