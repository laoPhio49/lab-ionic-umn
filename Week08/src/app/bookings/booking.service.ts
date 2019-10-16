import { Injectable } from '@angular/core';
import { Booking } from './booking.model';
import { Place } from '../places/place.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookings: Booking[] = [
    new Booking(
      'b1',
      'p1',
      'u1',
      'Serpong M-Town',
      2
    ),
    new Booking(
      'b2',
      'p2',
      'u2',
      'Scientia Residence',
      8
    )
  ]

  private myBookings: Place[] = [];

  constructor() { }

  getAllBooking(){
    return [...this.bookings];
  }

  getBooking(bookId: String){
    return {
      ...this.bookings.find(booking =>{
        return booking.id === bookId;
      })
    }
  }

  deleteBooking(bookId: String){
    return [
      ...this.bookings = this.bookings.filter(
        booking => {
          return booking.id != bookId;
        }
      )
    ]
  }

  addToMyBooking(p: Place){
    this.myBookings.push(p);
  }
  getMyBookings(){
    return [...this.myBookings];
  }
  deleteMyBooking(id: String){
    this.myBookings = this.myBookings.filter(
      p => {
        return p.id !== id;
      }
    );
  }
}
