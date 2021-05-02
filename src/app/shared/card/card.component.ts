import { Component, Input, OnInit ,SimpleChanges,ViewChild } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card:any;
  @Input() heart:any;
  @ViewChild("commentInput") commentInput:any;
  comment:any=[];
  liked:boolean=false;
  commentid:any=0;

  isLiked():void{
    this.liked=!this.liked
    }
    
    isfavourite(i:any):void{
    this.heart=!this.heart;
    this.movieService.isfavourite(i);
    }

    focus():void{
      this.commentInput.nativeElement.focus();
    }
    
    addComment(event:any, id:number):void{
      let text=event.target.value;
      this.comment.push({
        id:this.commentid,
        comment:text,
        reply:[]
      })
      this.commentid++;
    this.movieService.setComments(this.comment,id)
     }
    


constructor(private movieService:MovieService){}
  
ngOnChanges(changes: SimpleChanges): void {
  this.movieService.getComments(this.card.id).subscribe((item)=>{
    this.comment=item
  })
}
ngOnInit(): void {
 this.movieService.getComments(this.card.id).subscribe((item)=>{
    this.comment=item
  })
}


}


