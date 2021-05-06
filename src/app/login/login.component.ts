import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 valid:boolean=false;
 user:any[]=[];
 email:any;
 password:any;
 bodyTag: HTMLBodyElement = document.getElementsByTagName('body')[0];
 constructor(public userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.bodyTag.classList.add('login-page');
  this.userService.getUsers().subscribe((user:any)=>{
      this.user=user
  })
  }
Check(user:any):void{
this.user.map((item:any)=>{
  if(item.email===user.email && item.password===user.password){
    this.userService.setName(item.name)
    this.router.navigateByUrl("/home")
  }
  else{
this.valid=true
  }
})
  }
  ngOnDestroy() {
    this.bodyTag.classList.remove('login-page');
  }

}
