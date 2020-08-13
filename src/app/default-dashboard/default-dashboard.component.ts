import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-default-dashboard',
  templateUrl: './default-dashboard.component.html',
  styleUrls: ['./default-dashboard.component.css']
})
export class DefaultDashboardComponent implements OnInit {

  ItemsArray = ["vaibhav","jayashreee","akshay","Pooja","Priyanka","Asha","sharmehs"];
  constructor() { }

  ngOnInit(): void {
  }

}
