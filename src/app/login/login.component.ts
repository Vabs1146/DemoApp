import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:String ='';
  pass:String='';
  constructor() { }

  ngOnInit(): void {
  }

  Login(){
    if(this.name == 'abc@in' && this.pass == 'abc123'){
      alert('login sucessfull');
      this.name = '';this.pass='';
    }
    else{
      alert('wrong creadentials');
    }
  }

}
