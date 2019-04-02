
// tanvi dhupkar
// student number - 10508427

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  providers: []

})
export class MoviesListComponent implements OnInit {

  moviesList: any[]

  constructor(private http:HttpClient) { }

  ngOnInit() {
    // we are getting list of  movies from the url specified
    // https://college-movies.herokuapp.com/
     this.getMovies()
  }

  //get method for getting the data from url
  getMovies(){
    this.http.get<any[]>('https://college-movies.herokuapp.com/')
      .subscribe(data => {
        this.moviesList = data;
        console.log(this.moviesList)
      });
  }

}
