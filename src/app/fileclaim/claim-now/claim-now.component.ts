import { Component, OnInit } from '@angular/core';
import { Claim } from '../../models/claim.model';
import { ClaimsService } from '../../service-claim/claims.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-claim-now',
  templateUrl: './claim-now.component.html',
  styleUrls: ['./claim-now.component.css']
})
export class ClaimNowComponent implements OnInit {
title="claim";
claims:Claim[]=[];
claim:Claim={
claim_id:'',
policy_no:'',
policy_type:''
  

}

  constructor(private claimsService:ClaimsService,
    private snackBar: MatSnackBar ){

  }

  ngOnInit(): void {
    this.getAllClaims();
    
      }
    
      getAllClaims(){
        this.claimsService.getAllClaims()
        .subscribe(
          response =>{
            this.claims=response;
          }
        );
    
      }
    
      onSubmit(){
    
    this.claimsService.addClaim(this.claim)
    .subscribe(
      response=>{
        console.log(response);
        this.getAllClaims();
        this.claim={
          claim_id:'',
  policy_no:'',
  policy_type:'',
    
          
        }
    
      }
    );}

    //delete claim
    deleteClaim(claim_id:string){
      
     this.claimsService.deleteClaim(claim_id)
      .subscribe(
        response =>{
         
          this.getAllClaims();
        }
      );
    }
    openSnackBar(message: string,action: string | undefined){
      this.snackBar.open(message, action);
    }
      
}
