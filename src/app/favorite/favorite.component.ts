import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  favourite:Movie[]=[];
  heart:boolean=true;
  

  constructor(private movieService:MovieService) { }
  ngOnInit(): void {
    this.movieService.getfavourite().subscribe(res=>{
      this.favourite=res
    })
  }  
  ngOnChanges(changes: SimpleChanges): void {
    this.movieService.getfavourite().subscribe(res=>{
      this.favourite=res
    })
  }



}
