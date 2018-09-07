import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-mydetails',
  templateUrl: './mydetails.component.html',
  styleUrls: ['./mydetails.component.scss']
})
export class MydetailsComponent implements OnInit {

  constructor() { }
  UpdatepasswordForm = new FormGroup({
    password: new FormControl('',[Validators.required,Validators.maxLength(10)]),
    confirmpassword:new FormControl('',Validators.required)
  });
  onUpdate(pass){
   console.log(pass);
  }
  ngOnInit() {
  }

}
