
// tanvi dhupkar
// student number - 10508427

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/shared/customer.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/Model/customer';

@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.css']
})
export class SeatBookingComponent implements OnInit {
  movie: any = {title:"Geostorm"};
  movies: any[]
  day: any
  seat : string
  formData: Customer;
  
  constructor(private http:HttpClient,private route: ActivatedRoute,private service : CustomerService, private toastr : ToastrService) { }

  ngOnInit() {
    //to get the list of movies
    this.getMovies();
    //initialise with null at start
    this.seat = '';
   
    
  }

  //refresh the input parameters of form
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.formData = {
      customerId: null,
      customerName: '',
      contact: '',
      email: ''
    }
    this.seat='';
  }

  //when submit button is clicked
  onSubmit(form: NgForm) {
    if (form.value.customerId == null)
      this.insertRecord(form);
  }

 //store the details in local storage
  insertRecord(formData: NgForm) {

    //creating a JSON object for storing Customer Details
    var booking = {name:'',contact:'',email:''};
    booking.name = formData.value.customerName;
    booking.contact = formData.value.contact;
    booking.email = formData.value.email;
    console.log(
      "BOOKING DETAILS OF CUSTOMER ARE AS FOLLOWS :"+ "\n"+
      "CUSTOMER NAME      : " + booking.name + "\n"
      +"CUSTOMER CONTACT  : " + booking.contact + "\n"
      +"CUSTOMER EMAIL    : " + booking.email + "\n"
    );

    //storing the data of booking in local storage
    localStorage.setItem('bookingDetails',JSON.stringify(booking));
    this.toastr.info('Booked successfully', 'Customer details saved!!');

    //showing details of seat booked
    console.log( "BOOKED SEATS ARE : " +this.seat);
    this.toastr.info('Booked successfully', this.seat);

    //reset the form 
    this.resetForm();
  }


  //get method for getting the data from url
  getMovies(){
    this.http.get<any[]>('https://college-movies.herokuapp.com/')
      .subscribe(data => {
        this.movies = data;
        console.log(this.movies)
         //get the exact movie details using Activated route parameters
    this.movie = this.movies.find(m => m.title.toLowerCase() == this.route.snapshot.params['title'].toLowerCase());
    //get the exact day for booking seats
    this.day = this.route.snapshot;
      });
  }

//called when checkbox values are changed for booking or unbooking seats
  yourfunc(e) {
    if(e.target.checked){ 
      console.log(e.target.id + 'number seat is booked');
      this.seat +=' '+ e.target.id;
      localStorage.setItem( 'seats', this.seat );
      
    }
     else{
       console.log(e.target.id + 'number seat is unbooked')
     }
 }
}
