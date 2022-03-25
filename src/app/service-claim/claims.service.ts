import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Claim } from '../models/claim.model';

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {

  baseUrl='https://localhost:7187/api/Claims';
  constructor(private http:HttpClient) { }

 //get all claims
 getAllClaims():Observable<Claim[]>{
  return this.http.get<Claim[]>(this.baseUrl);
    }
  
    addClaim(claim:Claim):Observable <Claim>{
      claim.claim_id='00000000-0000-0000-0000-000000000000';
     return this.http.post<Claim>(this.baseUrl,claim);
    }

//delete claim
deleteClaim(claim_id:string):Observable<Claim>{
  return this.http.delete<Claim>(this.baseUrl +'/'+ claim_id)
  
}
}
