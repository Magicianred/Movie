import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { User } from './user';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase/app';



@Injectable({
  providedIn: 'root'
})
export class UserService {
userList:AngularFireList<any>;
Name:any;

  constructor(private db:AngularFireDatabase, public afAuth: AngularFireAuth,public router:Router) { 
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
GoogleAuth() {
  return this.AuthLogin(new auth.GoogleAuthProvider());
}  
AuthLogin(provider:any) {
  var user:any=[]
  var email:any;
  return this.afAuth.auth.signInWithPopup(provider)
  .then((result) => {
    email=result.user?.email
    this.getUsers().subscribe((item:any)=>{
      user=item
     const exist=user.find((item:any)=>item.email===email)
     this.setName(exist.name)
    })
    this.router.navigateByUrl("/home")

    

  }).catch((error) => {
      console.log(error)
  })
}
}
