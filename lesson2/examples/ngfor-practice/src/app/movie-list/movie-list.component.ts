import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining'];
   constructor() { }

   ngOnInit() {
   }
   addMovie(newTitle:string){
    if(!this.movies.includes(newTitle)){
      if(newTitle===''){
        // do nothing
      } else {
        this.movies.push(newTitle);
      };    
   } 
  }
}