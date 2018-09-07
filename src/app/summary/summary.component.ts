import { Component, OnInit, AfterViewInit, ViewChild, ViewChildren } from '@angular/core';
import {HalllistComponent} from '../halllist/halllist.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit,AfterViewInit {
  hallN: string;
  @ViewChildren(HalllistComponent) child;
  constructor() { }

  ngOnInit() {
  }
ngAfterViewInit(){
this.hallN = this.child.hallName;
console.log(this.hallN);
}
}
