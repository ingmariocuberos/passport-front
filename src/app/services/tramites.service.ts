import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../interfaces/Response.interface';

@Injectable({
  providedIn: 'root'
})
export class TramitesService {

  private baseUrl: string = 'http://localhost:4000/api/';

  constructor(
    private http: HttpClient
  ) { }

  sendPayment(data: any){
    const url = this.baseUrl + 'tramite/payment';
    return this.http.post<Response>(url, data);
  }

  sendAppoinment(data: any){
    const url = this.baseUrl + 'tramite/appoinment';
    return this.http.post<Response>(url, data);
  }
}
