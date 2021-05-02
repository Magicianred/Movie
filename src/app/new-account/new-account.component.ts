import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  registerForm!: FormGroup;
  name!:FormControl ;
  email!:FormControl;
  password!: FormControl;
  confirmPassword!:FormControl;
  invalid:boolean=false;

  private validatePassword(control:FormControl):{[key:string]:any} 
  {
    var p = control.value;
    if(p.length<8  && p!==""){
      return {'length':' Your password must be at least 8 characters '}
    }
  else if (p.search(/[a-z]/i) < 0 && p!=="") {
      return {'letter':"Your password must contain at least one small letter."}; 
    }
   else if (p.search(/[A-Z]/) <0 && p!=="") {
      return {'capitalletter':"Your password must contain at least one capital letter."}; 
    }
   else if (p.search(/[0-9]/) < 0 && p!=="") {
        return {"number":"Your password must contain at least one digit."};
    }
    else{
    return null as any;
}
  }

  
  createAccount(data:any){
    let account:User={
      name:data.name,
      password:data.password,
      email:data.email
    }
    if(this.registerForm.valid){
    this.userService.CreateUser(account);
    this.userService.setName(data.name);
    this.router.navigateByUrl('/home')
  }
  }
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.name=new FormControl("",Validators.required);
    this.email=new FormControl("",[Validators.required,  	Validators.email]);
    this.password=new FormControl("",[Validators.required,this.validatePassword]);
    this.confirmPassword=new FormControl("",Validators.required)
    this.registerForm=new FormGroup({
      name:this.name,
      email:this.email,
      password:this.password,
      confirmPassword:this.confirmPassword
    });
  }

}

