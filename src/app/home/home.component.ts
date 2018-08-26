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
  From : string;
  To : string;
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
let stringToSplit = date;
let x = stringToSplit.split("-");
this.From =x[0];
this.To=x[1];
console.log(this.To);
//var LoggedInStatus= this.route.snapshot.params['loggedIn'];
this.router.navigate(['halllist',{foo:this.From,foo2:this.To,pin:pincode}]);

  }
}
