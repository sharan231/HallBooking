import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators,ReactiveFormsModule} from '@angular/forms';
import { Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { UserserviceService } from '../userservice.service';
import {user} from '../Interfaces/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  u1 : user;
  Register: user;
  button: string;
  pass: string;
  isLoggedIn: boolean=false;
  constructor(private router: Router,private userservice:UserserviceService ) { }
  RegisterForm = new FormGroup({
    username: new FormControl('Sharan',[Validators.required,Validators.maxLength(10)]),
    fullname: new FormControl('assddf',[Validators.required,Validators.maxLength(10)]),
    lastname: new FormControl('assddf',[Validators.required,Validators.maxLength(10)]),
    address: new FormControl('assddf',[Validators.required]),
    email: new FormControl('assddf',[Validators.required,Validators.email]),
    Password:new FormControl('****',Validators.required)
  });
  onRegister(){
console.log(this.RegisterForm.value);
    this.Register =this.RegisterForm.value;
    this.userservice.postuser(this.Register);
    this.router.navigate(['dashboard/home']);
  }
  LoginForm = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.maxLength(10)]),
    Password:new FormControl('Password',Validators.required)
  });
  onSubmit(user,pass){
    //var username = e.target.elements[0].value;
    //var password = e.target.elements[1].value;
    console.log(user);
    //if(p==this.u1[0].password){
      if(user=="admin"){
      //this.closewindow();
      console.log(user);
      this.button= user;
      this.isLoggedIn=true;
        this.router.navigate(['dashboard/home',{loggedIn:this.isLoggedIn}]);
    }
  }
  logout(){
    this.isLoggedIn=false;
    this.router.navigate(['dashboard/home',{loggedIn:this.isLoggedIn}]);
  }
  ngOnInit() {
    this.getuser();   
  }
  public getuser(){
     this.userservice.getuserbyid().subscribe(
      (data: user)=>{
        this.u1 = data;
        console.log(this.u1);
        console.log(this.u1[0].password);
        //console.log(this.u1.password);
      });
      
  }
}
