import { Component, OnInit,ViewChild  } from '@angular/core';
import{FormGroup,FormControl,Validators,ReactiveFormsModule} from '@angular/forms';
import { Router,ActivatedRoute,Params} from '@angular/router';
import {BsDaterangepickerConfig} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  daterangepickerconfig: Partial<BsDaterangepickerConfig>;
  DateForm = new FormGroup({
  FromDate: new FormControl('',Validators.required),
  PinCode: new FormControl('',Validators.required)
  });
  constructor(private router: Router,private route:ActivatedRoute) {
    this.daterangepickerconfig = Object.assign({},
      { containerClass: 'theme-dark-blue',showWeekNumbers:false,minDate: new Date()}
    );
   }

  ngOnInit() {
   
  }
 
  noWrapSlides = false;
  onSubmit(e){

var date = e.target.elements[0].value;
var pincode=e.target.elements[1].value;
console.log(date);
var LoggedInStatus= this.route.snapshot.params['loggedIn'];
this.router.navigate(['halllist',{foo:date,pin:pincode,loginStatus:LoggedInStatus}]);

  }
}
