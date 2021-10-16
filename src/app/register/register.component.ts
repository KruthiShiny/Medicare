import { Component, OnInit } from '@angular/core';

import { UserRegisterService   } from '../user-register.service';
//import { UrlResolver } from '@angular/compiler';
import { User } from '../user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user : any  = new User("","","",0,"");
  message : any;


  constructor(private service : UserRegisterService) { }

  ngOnInit(): void {    
  }
  public registerNow(){
    let reponse = this.service.doRegistration(this.user);
    reponse.subscribe(data=> {
      this.message=data;

    });
  }

}
