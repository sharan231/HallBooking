import { CanDeactivate } from "@angular/router";
import { ProfileComponent } from './profile/profile.component';
import { Injectable } from "@angular/core";
@Injectable()
export class EditprofileCanDeactiveGuardService implements CanDeactivate<ProfileComponent>{

    canDeactivate(component: ProfileComponent): boolean{
        if(component.editProfileForm.dirty){
            return confirm('Are you sure you want to discard your change');
        }
        return true;
    }  
}