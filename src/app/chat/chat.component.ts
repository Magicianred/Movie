import { Component, OnInit } from '@angular/core';
import { Chats, User } from '../user';
import { UserService } from '../user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  users:User[]=[]
  name:string[]=[];
  chats:Chats[]=JSON.parse(localStorage.getItem('chats')|| '[]');
  currentUser:string="";

  Open(name:any):void{
    this.name.push(name);
   const index= this.users.indexOf(name)
    this.users.splice(index,1)
      }
  addMessage(event:any,name:any):void{
    var text=event.target.value
    const exist=this.chats.find((item:any)=>item.firstName===this.currentUser && item.secondName===name)
    if(exist){
      exist.message.push(
        {
          date:this.datepipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss')||"",
          sent:this.currentUser,
          message:event.target.value
      })
    }
    else{
    this.chats.push(
      {
        firstName:this.currentUser,
        secondName:name,
        message:[
          {
          date:this.datepipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss')||"",
          sent:this.currentUser,
          message:event.target.value
        }
        ]
      }
    )
    }
    localStorage.setItem('chats',JSON.stringify(this.chats))
    event.target.value="";
  }
  close(name:any):void{
    const index=this.name.indexOf(name)
    this.name.splice(index,1)
    this.users.push(name)
  }
  constructor(private userService:UserService, public datepipe: DatePipe) { }
  ngOnInit(): void {
   this.currentUser= this.userService.getName();
this.userService.getUsers().subscribe((user:any)=>{
    this.users=user.filter((item:any)=>item.name!==this.currentUser).map((item:any)=>item.name)
})
console.log(this.chats)
  }


}


