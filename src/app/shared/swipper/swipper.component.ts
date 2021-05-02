import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/movie';
import { MovieService } from 'src/app/movie.service';
import SwiperCore, {  Navigation,
  Pagination,
  A11y, EffectCoverflow, SwiperOptions  } from 'swiper';

SwiperCore.use([Navigation,
  Pagination,
  A11y,EffectCoverflow]);
 
  
@Component({
  selector: 'app-swipper',
  templateUrl: './swipper.component.html',
  styleUrls: ['./swipper.component.css']
})
export class SwipperComponent implements OnInit {
  config: SwiperOptions = {
    init: false,
    loop: true,
    speed: 800,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 50, 
      stretch: 0, 
      depth: 100, 
      modifier: 1, 
      slideShadows: true
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 2
      }
    }
  };
  data:Movie[]=[];
  constructor(private movieService:MovieService) { 
  }

  ngOnInit(): void {
    this.movieService.getMovies("top").subscribe((item:any)=>{
      this.data=item
    })
  }

}
