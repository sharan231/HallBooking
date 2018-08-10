import { Component, OnInit, ViewChild } from '@angular/core';
import{FormGroup,FormControl,Validators,ReactiveFormsModule, NgForm} from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
 @ViewChild('profileForm') public editProfileForm : NgForm;
  constructor() { }
  ProfileForm = new FormGroup({
    username: new FormControl('Sharan',[Validators.required,Validators.maxLength(10)]),
    fullname: new FormControl('assddf',[Validators.required,Validators.maxLength(10)]),
    lastname: new FormControl('assddf',[Validators.required,Validators.maxLength(10)]),
    address: new FormControl('assddf',[Validators.required]),
    email: new FormControl('assddf',[Validators.required,Validators.email]),
    Password:new FormControl('****',Validators.required)
  });
  onRegister(){
console.log(this.ProfileForm.value);
    //this.Register =this.ProfileForm.value;
    //this.userservice.postuser(this.Register);
    //this.router.navigate(['dashboard/home']);
  }

  ngOnInit() {
  }

}
