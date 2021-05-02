import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of} from 'rxjs';
import {map} from 'rxjs/operators';
import {Movie,Comment} from './movie'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
public favourite=JSON.parse(localStorage.getItem('favourite')|| '[]');
public comment=JSON.parse(localStorage.getItem('comment')|| '[]');

  constructor(private httpClient: HttpClient) {
   }

getMovies(title:any):Observable<Movie[]>{
  let movie:Movie[]=[];
   switch(title){
     case "popular":
      return this.httpClient.get<Movie[]>('https://api.themoviedb.org/3/movie/popular?api_key=0c01e2680a5f8a794f1e6e3f312697ff').pipe(
        map((data: any) => data.results)
      );
      break;
        case "top":
    return this.httpClient.get<Movie[]>('https://api.themoviedb.org/3/movie/top_rated?api_key=0c01e2680a5f8a794f1e6e3f312697ff').pipe(
      map((data: any) => data.results)
    );
    break;
    case "up comming":
      return this.httpClient.get<Movie[]>('https://api.themoviedb.org/3/movie/upcoming?api_key=0c01e2680a5f8a794f1e6e3f312697ff').pipe(
        map((data: any) => data.results)
      );
      break;
   default:
    return this.httpClient.get<Movie[]>('https://api.themoviedb.org/3/movie/now_playing?api_key=0c01e2680a5f8a794f1e6e3f312697ff').pipe(
      map((data: any) => data.results));
      break;
   }
}

isfavourite(item:any):void{
  const exist=this.favourite.find((i:any)=>i.id===item.id)
  if(exist){
   const index= this.favourite.indexOf(item)
    this.favourite.splice(index,1)
  }
  else{
    this.favourite.push(item)
  }
  localStorage.setItem('favourite',JSON.stringify(this.favourite))
}

getfavourite():Observable<Movie[]>{
return of(this.favourite);
}

setComments(i:any,id:any):void{
  const exist=this.comment.find((item:any)=>item.id===id)
  if(exist){
    const index=this.comment.indexOf((item:any)=>item===exist)
    this.comment.splice(index,1)
  }
  this.comment.push({
    id:id,
    comments:i
  })
 localStorage.setItem("comment",JSON.stringify(this.comment))
 console.log(JSON.parse(localStorage.getItem('comment')||'[]'))
}

getComments(id:any):Observable<Comment[]>{
  const comments=this.comment.find((x:any)=>x.id===id);
  if(comments){
  return of(comments.comments)
  }
  else{
    return of([])
  }
}
}

