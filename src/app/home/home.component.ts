import { Component, OnInit, SimpleChange } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  links:any=["now playing","top","up comming"];
  movies:Movie[]=[];
  data:any=[
    {
      image:"../../assets/images/slider1.jpg",
      h1:"Iron door",
      p:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
  {
  image:"../../assets/images/slider2.jpg",
  h1:"the Earth",
  p:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
},
{
  image:"../../assets/images/slider3.jpg",
  h1:"city dreams",
  p:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
}]

ChangeMovies(event:any,title:any){
  const all=document.getElementsByClassName("nav-link");
  for(let i =0;i<all.length;i++){
    all[i].classList.remove("active")
  }
  const element=event.target;
  element.classList.add("active");
  this.movieService.getMovies(title).subscribe((item:any)=>{
    this.movies=item,
    this.movies=this.movies.splice(0,6)
  })
}

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies("now playing").subscribe((item:any)=>{
        this.movies=item,
        this.movies=this.movies.splice(0,6)
    })
    
  }
}






