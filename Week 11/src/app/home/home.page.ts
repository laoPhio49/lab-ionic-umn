import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';
import { Booking } from './booking.interface';
import { BookingService } from './booking.service';
import { AlertController, ModalController } from '@ionic/angular';
import { NewBookingPage } from './new-booking/new-booking.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  todos: Todo[];
  private bookings: Booking[] = [];

  constructor(
    private todoService: TodoService,
    private bookingSvc: BookingService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit(){
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }
  
  remove(item){
    this.todoService.removeTodo(item.id);
  }

  getBookings(){
    this.bookingSvc.fetchBookings()
      .subscribe((bookings) => {
        console.log(bookings);
      });
  }

  newBooking(){
    this.presentModal();
  }

  deleteBooking(){
    this.presentAlertPrompt();
  }

  async presentAlertPrompt(){
    const alert = await this.alertCtrl.create({
      header: 'Delete a Booking',
      inputs: [
        {
          name: 'bookingId',
          type: 'text',
          placeholder: 'Enter your booking ID'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Ok',
          handler: (data) => {
            this.bookingSvc.deleteBooking(data.bookingId)
              .subscribe(() => {
                this.bookingSvc.fetchBookings()
                  .subscribe((bookings) => {
                    console.log(bookings);
                  });
                console.log("DELETED");
              })
          }
        }
      ]
    });
    await alert.present();
  }

  async presentModal(){
    const modal = await this.modalCtrl.create({
      component: NewBookingPage
    });
    return await modal.present();
  }

}
