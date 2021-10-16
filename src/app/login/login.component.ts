import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegisterService } from '../user-register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!: string;
  password! :string;
  script : any;

  constructor(private service : UserRegisterService) { }

  ngOnInit(): void {
  }
  public loginNow(){
    console.log("i am in loginNow")
    let reponse = this.service.findUser(this);
    console.log(reponse);
    reponse.subscribe((data: User)=> {
      this.script=data;

    });
  }


}
