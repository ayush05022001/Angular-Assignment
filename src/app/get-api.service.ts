import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  
  constructor(
    private http: HttpClient
  ) { }


  apiCall(){

    
    
    return this.http.get('https://run.mocky.io/v3/ecfd489c-9af9-4dc1-a53e-201d83bdc813');
  }
}
