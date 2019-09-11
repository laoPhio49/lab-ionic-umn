import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';
import { NavController, ModalController, LoadingController, ActionSheetController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  loadedPlace: Place;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private placesSvc: PlacesService,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private actionSheetCtrl: ActionSheetController
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('placeId')) { return; }
        this.loadedPlace = this.placesSvc.getPlace(paramMap.get('placeId'));
      }
    )
  }

  goBack(){
    this.router.navigateByUrl('/places/tabs/discover');
  }

  async bookPlace(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Book Place',
      buttons: [{
        text: 'Book w/ Random Date',
        handler: () => {
          this.modalCtrl.create({ component: CreateBookingComponent,
          componentProps: { selectedPlace: this.loadedPlace } })
          .then(modaleElement => {
            modaleElement.present();
            return modaleElement.onDidDismiss();
          })
          .then(resultData => {
            console.log(resultData);
          });
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
      ]
    });
    await actionSheet.present();
  }

  
}
