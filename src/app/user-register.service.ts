import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(private http : HttpClient) { }

  public doRegistration(user: User){
    return this.http.post("http://localhost:9082/save-user",user, {responseType : "text" as "json"});
  }

  public getUsers(){
    return this.http.get("http://localhost:9082/all-users");
  }

  public getUserByUsername(username: string){
    return this.http.get("http://localhost:9082/search/"+username);
  }

  public deleteUser(username: string){
    return this.http.get("http://localhost:9082/delete/"+username);
  }
  public findUserByUsernameAndPassword(username: string,password: string){
    return this.http.post("http://localhost:9082/login",{responseType : "text" as "json"});
  }

  public findUser(user: User){
    return this.http.get("http://localhost:9082/login",{responseType : "text" as "json"});
  }
}