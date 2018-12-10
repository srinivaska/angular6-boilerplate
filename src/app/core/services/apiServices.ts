import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:  'root'
    })
    
export class APIService {
    constructor(private http: HttpClient) { }
    baseUrl: string = 'http://localhost:4000/api/customers';
    
      getUsers() {
        return this.http.get(this.baseUrl);
      }
}