import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService  } from '../movie.service';
import { UserService } from '../user.service';


@Component({
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {
  links:any=["upcomming","top","popular","now playing"]
  data:Movie[]=[];
   errorMessage:string="";
  
    changeMovie(e:any):void{
      this.movieService.getMovies(e).subscribe((item:any)=>{
        this.data=item
      })
    }
 
    
  
   
 constructor(private movieService:MovieService){}
 
ngOnInit():void{
this.movieService.getMovies("popular").subscribe(
  {
    next:user=>this.data=user,
    error:err=>this.errorMessage=err
  }
)
}


}
