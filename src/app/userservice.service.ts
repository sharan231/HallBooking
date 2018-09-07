import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import {user} from './Interfaces/user';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  public isLoggedin : string;
  //API_URL  =  'http://localhost:8080';
  find_userURL = 'http://localhost:8080/HallBookingManagement/v1/test';
  constructor(private httpClient:  HttpClient) { this.isLoggedin = "false";}
setisLoggedin(){
  this.isLoggedin= "true";
}
getisLoggedin(){
  return this.isLoggedin;
}
  getuserbyid(user){
    return  this.httpClient.post<user>(this.find_userURL,user);
  }
  postuser(user){
    return  this.httpClient.post(``,user);
}
}
