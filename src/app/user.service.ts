import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
userList:AngularFireList<any>;
Name:any;
  constructor(private db:AngularFireDatabase) { 
  this.userList=db.list('/users');

  }
    
 getUsers():Observable<User[]>{
   return this.userList.valueChanges();
 }

 CreateUser(user:any){
  this.userList.push(user)
}
setName(name:any){
this.Name=name;
}
getName():string{
  return this.Name
}
}
