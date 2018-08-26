import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RouterModule,Routes } from '@angular/router';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { HalllistComponent } from './halllist/halllist.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { ExploreHallComponent } from './explore-hall/explore-hall.component';
import { SummaryComponent } from './summary/summary.component';
import { ProfileComponent } from './profile/profile.component';
import {EditprofileCanDeactiveGuardService} from './Edit-Profile-CanDeactiveGuard.service';
import {UserserviceService} from './userservice.service';
import {userGuardService} from './userGuardService';
import { HistoryComponent } from './history/history.component';
import { AgmCoreModule } from '@agm/core';
import { TestComponent } from './test/test.component';
import { DataTablesModule } from 'angular-datatables';
import { MydetailsComponent } from './mydetails/mydetails.component';
import {ConfirmEqualValidatorDirective} from './shared/confirm-equal-validator.directive';
//import {hallListService} from './hallListService.service';

const appRoutes: Routes = [
  //{ path:'login', component: LoginformComponent},
  { path:'dashboard', component: DashboardComponent, children: [
    { path:'home', component: HomeComponent},
    { path:'profile', component: ProfileComponent,canActivate: [userGuardService], children :[
      {path: 'mydetails', component:MydetailsComponent}
    ]},
    { path:'history', component: HistoryComponent,canActivate: [userGuardService]}
  ]},
  { path:'halllist', component: HalllistComponent},
  { path:'summary', component: SummaryComponent},
  { path:'', redirectTo:'/dashboard/home', pathMatch: 'full'},
  { path:'**', redirectTo:'/dashboard/home', pathMatch: 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    HalllistComponent,
    FooterComponent,
    ExploreHallComponent,
    SummaryComponent,
    ProfileComponent,
    HistoryComponent,
    TestComponent,
    MydetailsComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTablesModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCxuFLqm61MCHw7EZbvnzksSeVetCWo_JI",
      libraries: ["places"]
    }),
    ReactiveFormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    MDBBootstrapModule.forRoot()
  ],
  schemas:[ NO_ERRORS_SCHEMA ],
  providers: [EditprofileCanDeactiveGuardService,UserserviceService,userGuardService],
  bootstrap: [AppComponent]
})
//canDeactivate: [EditprofileCanDeactiveGuardService],
export class AppModule { }
