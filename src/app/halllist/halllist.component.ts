import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {ActivatedRoute,Params} from '@angular/router';
import{FormGroup,FormControl,Validators,ReactiveFormsModule} from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import {user} from '../Interfaces/user';
import {hall} from '../Interfaces/hall';
//import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-halllist',
  templateUrl: './halllist.component.html',
  styleUrls: ['./halllist.component.scss']
})
export class HalllistComponent implements OnInit {

halllist : any;
selected:any;
date:any;
pin:any;
loginStatus:String;
hallname: String;
//loginStatus=this.route.snapshot.params['loginStatus'];
Register: user;
  constructor(private router: Router,private route: ActivatedRoute,private userservice:UserserviceService) { }
  //loginStatus=this.comp.isLoggedIn
  public itemsList: Object[] = [
    {
      title: 'Description',
      description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.'
    },
    {
      title: 'Details',
      description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.'
    },
    {
      title: 'Shipping',
      description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.'
    }
  ];
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
    this.loginStatus="true";
    this.router.navigate(['halllist',{loginStatus:this.loginStatus}]);
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
      //this.button= user;
      this.loginStatus="true";
      this.router.navigate(['halllist',{loginStatus:this.loginStatus}]);
      console.log(this.loginStatus);
    }
  }
  LoggedInBook(){
    this.router.navigate(['summary']);
  }
  ExploreHall(name){
    this.hallname=name;
    //console.log(this.halllist1);
    //this.gethallstest(this.hallname);
    //console.log(this.halllist1);
    console.log(this.hallname);
    this.selected=this.halllist.find(x => x.name == name);
    console.log(this.selected);
    console.log(this.selected.name);
}
  ngOnInit() {
    this.date= this.route.snapshot.params['foo'];
    this.pin= this.route.snapshot.params['pin'];
    this.loginStatus=this.route.snapshot.params['loginStatus'];
    console.log(this.loginStatus);
    this.gethalls();
    
  }
 
  gethalls(){
    //return this._service.gethalls().subscribe(halllist=>{this.halllist=halllist;})
    return this.halllist = [
      {"name":"MadhuHall", "address":"gudigere","advance":"2000","description":"THIS IS HALL WAS BUILT IN THE NAME OF THE QUEEN MADHU","image":"assets/Temple-tree.jpeg"},
      {"name":"ManuHall", "address":"gudigere","advance":"2000","description":"THIS IS HALL WAS BUILT IN THE NAME OF THE QUEEN MANU","image":"assets/waterbody-lawn-wedding.jpg"},
      {"name":"SharanHall", "address":"gudigere","advance":"2000","description":"THIS IS HALL WAS BUILT IN THE NAME OF THE KING SHARAN","image":"assets/Temple-tree.jpeg"},
      {"name":"NaveenHall", "address":"gudigere","advance":"2000","description":"THIS IS HALL WAS BUILT IN THE NAME OF THE KING NAVEEN","image":"assets/Banquet-Halls-in-Bangalore-4.jpg"},
    ]
    }
  
    getHallInfo(String){
         
    }
}
