// developer 
// tanvi dhupkar
// student number - 10508427

import { Routes } from '@angular/router';
import { MoviesListComponent } from './app/Movies/movies-list/movies-list.component';
import {MoviesDetailsComponent} from './app/Movies/movies-details/movies-details.component'; 
import { SeatBookingComponent } from './app/Movies/seat-booking/seat-booking.component';
import { BookTicketsComponent } from './app/Movies/book-tickets/book-tickets.component';

export const appRoutes: Routes = [
    { path: 'movies-list', component: MoviesListComponent },
    { path: 'movies/:title', component: MoviesDetailsComponent },
    { path: 'bookSeats/:title', component: BookTicketsComponent },
    { path: 'seatBooking', component: SeatBookingComponent },
    {
        path: 'seatBooking/:title/mon', component: BookTicketsComponent,
        children: [{ path: '', component: SeatBookingComponent }]
    },
    {
        path: 'seatBooking/:title/tue', component: BookTicketsComponent,
        children: [{ path: '', component: SeatBookingComponent }]
    },
    {
        path: 'seatBooking/:title/wed', component: BookTicketsComponent,
        children: [{ path: '', component: SeatBookingComponent }]
    },
    {
        path: 'seatBooking/:title/thu', component: BookTicketsComponent,
        children: [{ path: '', component: SeatBookingComponent }]
    },
    {
        path: 'seatBooking/:title/fri', component: BookTicketsComponent,
        children: [{ path: '', component: SeatBookingComponent }]
    },
    {
        path: 'seatBooking/:title/sat', component: BookTicketsComponent,
        children: [{ path: '', component: SeatBookingComponent }]
    },
    {
        path: 'seatBooking/:title/sun', component: BookTicketsComponent,
        children: [{ path: '', component: SeatBookingComponent }]
    },
    { path: '', redirectTo: '/movies-list', pathMatch: 'full' }
];