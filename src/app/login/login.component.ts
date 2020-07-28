import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:String ='';
  password:String='';
  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  Login(){
    if(this.username == 'abc@in' && this.password == 'abc123'){
      alert('login sucessfull');
      this.username = '';this.password='';
      this.router.navigate(['/dashboard']);
    }
    else{
      alert('wrong creadentials');
    }
  }

}
