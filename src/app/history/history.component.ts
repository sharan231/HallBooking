
import { Component,ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { CommonModule } from '@angular/common';
//import { Angular5Csv } from 'angular5-csv/Angular5-csvn';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  products : any;
  constructor() { }

  ngOnInit() {
    this.getProducts();
  }
getProducts(){

  return this.products= [
]

}

}
