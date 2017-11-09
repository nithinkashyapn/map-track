import { Component, OnInit, AfterViewChecked, AfterContentInit } from '@angular/core';
import * as $ from 'jquery';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {
  lat = 12.9716;
  lng = 77.5946;

  ngOnInit() {
  }

  ngAfterContentInit() {

  }
}
