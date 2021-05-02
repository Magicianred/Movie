import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @ViewChild('replyInput') replyInput:any;
@Input() cardId:any;
@Input() comment:any;
replyid:any=0;

ShowInput(event:any):void{
  event.preventDefault();
  var element=event.target.parentElement.querySelector(".form-control");
  element.classList.remove("d-none")
}

addReply(event:any,id:any):void{
  let text =event.target.value
  const exist=this.comment.find((item:any)=>item.id===id)
  exist.reply.push(
    {
    id:this.replyid,
    reply:text,
    subreply:[]
  }
  )
this.replyid++;
this.movieService.setComments(this.comment,this.cardId)
}

addSubReply(event:any,id:any,i:number){
let text=event.target.value;
const exist=this.comment.find((item:any)=>item.id===id)
const reply=exist.reply.find((item:any)=>item.id==i)
reply.subreply.push(text)
this.movieService.setComments(this.comment,this.cardId)
}
  constructor(private movieService:MovieService) { }
  ngOnInit():void{
  }
}
