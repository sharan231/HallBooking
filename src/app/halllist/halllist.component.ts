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
isLoggedIn: boolean=false;
selected:any;
From:any;
To:any;
pin:any;
loginStatus: string;
hallname: String;
//loginStatus=this.route.snapshot.params['loginStatus'];
Register: user;
hallName: string;
hallAddress: string; 
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
    this.userservice.setisLoggedin;
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
      this.userservice.setisLoggedin();
      this.isLoggedIn=true;
      this.loginStatus = this.userservice.getisLoggedin();
      this.router.navigate(['halllist']);
      console.log(this.loginStatus);
    }
  }
  LoggedInBook(n){
    //console.log(n);
    this.hallName = n;
    console.log(this.hallName);
    //this.router.navigate(['summary']);
  }
  OccassionForm = new FormGroup({
    occassion: new FormControl('',[Validators.required]),
    //Password:new FormControl('Password',Validators.required)
  });
  onOccassion(e){
    var occassion = e.target.elements[0].value;
    console.log(occassion);
    this.router.navigate(['summary']);
  }
  logout(){
    this.isLoggedIn=false;
    this.loginStatus = "false";
    //this.router.navigate(['dashboard/home']);
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
    this.From= this.route.snapshot.params['foo'];
    this.To= this.route.snapshot.params['foo2'];
    this.pin= this.route.snapshot.params['pin'];
    this.loginStatus=this.userservice.getisLoggedin();
    console.log(this.loginStatus);
    this.gethalls();
    if(this.userservice.getisLoggedin()=='true'){
      this.isLoggedIn=true;
    }
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
