import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen'},
  {position: 2, name: 'Helium'},
  {position: 3, name: 'Lithium'},
  {position: 4, name: 'Beryllium'},
  {position: 23, name: 'Beryllium'},
  {position: 4, name: 'Beryllium'},
];

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {

  ItemsArray = ["vaibhav","jayashreee","akshay","Pooja","Priyanka","Asha"];
  
  constructor() { }

  ngOnInit(): void {
  }

}
