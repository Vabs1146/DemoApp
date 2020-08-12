import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {

  ItemsArray = ["vaibhav","jayashreee","akshay","Pooja","Priyanka","Asha","sharmehs"];
  values = '';
  onKey(value: string) {
    this.values = value ;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  addItem(){
    this.ItemsArray.push(this.values);
  }

}
