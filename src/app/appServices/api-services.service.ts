import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http : HttpClient) { }

  getuser(){
   return this.http.get("http://localhost:3000/users");
  }
}
