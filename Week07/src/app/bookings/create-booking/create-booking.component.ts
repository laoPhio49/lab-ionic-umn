import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { Place } from 'src/app/places/place.model';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {

  selectedPlace: Place

  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private bookingService: BookingService
  ) { }

  ngOnInit() {
    // console.log(this.selectedPlace)
    // console.log(this.selectedPlace.title)
  }

  bookThisPlace(){
    this.onBookMyPlace();
    // this.loadingCtrl.create({
    //   keyboardClose: true,
    //   message: 'Booking the place ...'
    // })
    // .then(loadingEl => {
    //   loadingEl.present();
    //   setTimeout(() => {
    //     loadingEl.dismiss();
    //     this.modalCtrl.dismiss(
    //       { message: 'booked!' },
    //       'confirm'
    //     );
    //   }, 2000);
    // });
  }

  bookCancel(){
    this.modalCtrl.dismiss(
      { message: 'canceled!'},
      'cancel'
    );
  }

  onBookMyPlace(){
    this.modalCtrl.dismiss({message: 'This is a dummy message!'}, 'confirm');
    this.bookingService.addToMyBooking(this.selectedPlace);
  }
}
