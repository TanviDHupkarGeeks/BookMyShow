import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './Movies/movies-list/movies-list.component';
import { MovieThumbnailComponent } from './Movies/movie-thumbnail/movie-thumbnail.component';
import { MoviesDetailsComponent } from './Movies/movies-details/movies-details.component';
import { NavComponent } from './Movies/nav/nav.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { appRoutes } from 'src/routes';
import { HttpClientModule } from '@angular/common/http';
import { SeatBookingComponent } from './Movies/seat-booking/seat-booking.component';
import { BookTicketsComponent } from './Movies/book-tickets/book-tickets.component';
import { CustomerService } from './shared/customer.service';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieThumbnailComponent,
    MoviesDetailsComponent,
    NavComponent,
    SeatBookingComponent,
    BookTicketsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [CustomerService,ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
