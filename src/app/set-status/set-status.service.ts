import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SetStatus } from './set-status'

@Injectable({
  providedIn: 'root'
})
export class SetStatusService {

   public constructor(private httpClient:HttpClient){ }

      public getVerificationStatuss() : Observable<SetStatus[]>
   {
      return this.httpClient.get<SetStatus[]>('http://localhost:8090/getVerificationStatuss');
   }

      public insertVerificationStatus(setStatus:SetStatus) : any
   {
       return this.httpClient.post<any>('http://localhost:8090/addVerificationStatus',setStatus);
   }
   

}
