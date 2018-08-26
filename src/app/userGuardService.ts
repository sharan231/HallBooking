import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from "@angular/router";
import { UserserviceService } from './userservice.service';
import { Injectable } from "@angular/core";
import { Router} from '@angular/router';

@Injectable()
export class userGuardService implements CanActivate{
    check: string;
     constructor(private userservice:UserserviceService,private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean{
       this.check=this.userservice.getisLoggedin();
       if(this.check === 'true'){
           return true;
       }
       else{
           this.router.navigate(['dashboard/home']);
           return false;
       }
    }

}