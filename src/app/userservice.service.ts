import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import {user} from './Interfaces/user';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  //API_URL  =  'http://localhost:8080';
  constructor(private httpClient:  HttpClient) { }

  getuserbyid(){
    return  this.httpClient.get(`http://localhost:8080/HallBookingManagement/v1/test`);
  }
  postuser(user){
    return  this.httpClient.post(``,user);
}
}
