
// tanvi dhupkar
// student number - 10508427

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/shared/customer.service';
import {ToastrService} from 'ngx-toastr'
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-tickets',
  templateUrl: './book-tickets.component.html',
  styleUrls: ['./book-tickets.component.css']
})
export class BookTicketsComponent implements OnInit {
  @Input() movieInput: any
  movie: any = {title:"Geostorm"};
  movies: any[]
  day : any = "mon"
  time:any[]
  dayCaps : any
  seats : string;
  constructor(private route: ActivatedRoute, private service: CustomerService, private toastr: ToastrService,private http: HttpClient) { }

  ngOnInit() {
    
    this.resetForm();
    this.getMovies();
  
  }

  //refresh the form input
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      customerId: null,
      customerName: '',
      contact: '',
      email: ''
    }
   
  }

   //get method for getting the data from url
   getMovies(){
    this.http.get<any[]>('https://college-movies.herokuapp.com/')
      .subscribe(data => {
        setTimeout(()=>{ this.movies = data;
          this.movie = this.movies.find(m => m.title.toLowerCase() == this.route.snapshot.params['title'].toLowerCase());

         //get day of booking from route
          this.day = this.route.snapshot.url[2].path;
         // get time details
          this.time = this.movie.runningTimes[this.day];
      
          if(this.day == 'mon')
          this.dayCaps = 'MONDAY'
          else if(this.day == 'tue')
          this.dayCaps = 'TUESDAY'
          else if(this.day == 'wed')
          this.dayCaps = 'WEDNESDAY'
          else if(this.day == 'thu')
          this.dayCaps = 'THURSDAY'
          else if(this.day == 'fri')
          this.dayCaps = 'FRIDAY'
          else if(this.day == 'sat')
          this.dayCaps = 'SATURDAY'
          else if(this.day == 'sun')
          this.dayCaps = 'SUNDAY'
          
          console.log(this.day + this.time)
         
        }, 500)
      
      
      });
    
  }


 

  }


 