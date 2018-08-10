import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators,ReactiveFormsModule} from '@angular/forms'
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  LoginForm = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.maxLength(10)]),
    Password:new FormControl('',Validators.required)
  });
  onSubmit(u,p){
    //var username = e.target.elements[0].value;
    //var password = e.target.elements[1].value;
     
    if(u=="admin" && p=="admin"){
      console.log("hey")
     // this.button= u;
      //this.isLoggedIn=true;
        //this.router.navigate(['dashboard/home',{loggedIn:this.isLoggedIn}]);
    }
  }
}
