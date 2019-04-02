
// tanvi dhupkar
// student number - 10508427

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.css']
})
export class MovieThumbnailComponent implements OnInit {

  //getting input from movie list component having details of movie
  @Input() movie: any
  constructor() { }

  ngOnInit() {
  }

}
