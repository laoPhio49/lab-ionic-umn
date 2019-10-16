import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import { Router } from '@angular/router';
import { Booking } from './booking.model';
import { IonItemSliding } from '@ionic/angular';
import { Place } from '../places/place.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  bookings: Booking[];
  myBookings: Place[];

  constructor(
    private bookingService: BookingService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.bookings = this.bookingService.getAllBooking();
    this.myBookings = this.bookingService.getMyBookings();
    console.log(this.myBookings);
  }

  deleteBooking(id: String, slidingItem: IonItemSliding){
    slidingItem.close();
    this.bookings = this.bookingService.deleteBooking(id);
  }

  deleteMyBooking(id:string){
    this.bookingService.deleteMyBooking(id);
    this.myBookings = this.bookingService.getMyBookings();
  }

}
