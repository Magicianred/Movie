import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Movie } from 'src/app/movie';
import { MovieService } from 'src/app/movie.service';


@Component({
  selector: 'app-owl',
  templateUrl: './owl.component.html',
  styleUrls: ['./owl.component.css']
})
export class OwlComponent implements OnInit{
  slidesStore:Movie[]=[];
  
  customOptions: OwlOptions = {
    loop: true,
    autoWidth :true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:true,
    nav: true,
    dots:true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
  }
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies("popular").subscribe((item:any)=>{
      this.slidesStore=item    
    })
}
}
