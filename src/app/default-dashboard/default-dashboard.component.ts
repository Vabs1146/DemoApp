import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-default-dashboard',
  templateUrl: './default-dashboard.component.html',
  styleUrls: ['./default-dashboard.component.css']
})
export class DefaultDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ItemsArray = [
    {date:'25/05/2000',title:'vabs creativity',status:'submitted'},
    {date:'25/05/2000',title:'vabs creativity',status:'submitted'},
    {date:'25/05/2000',title:'vabs creativity',status:'submitted'},
    {date:'25/05/2000',title:'vabs creativity',status:'submitted'},
    {date:'25/05/2000',title:'vabs creativity',status:'submitted'}
  ];
}
