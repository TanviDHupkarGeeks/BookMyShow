
// tanvi dhupkar
// student number - 10508427

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/Model/Movie';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css'],
  providers: []
})
export class MoviesDetailsComponent implements OnInit {

  movie: any = {title:"Geostorm"};
  movies:any[]
  constructor(private route: ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {
    //getting list of movies
    this.getMovies();

  
  }
  //get method for getting the data from url
  getMovies(){
    this.http.get<any[]>('https://college-movies.herokuapp.com/')
      .subscribe(data => {
        this.movies = data;
        console.log(this.movies)
          //finding the movie from the list of movies using the movie title parameter using ActivatedRoute
        this.movie = this.movies.find(m => m.title.toLowerCase() == this.route.snapshot.params['title'].toLowerCase());
        console.log(this.movie.title)
      });
  }
}
