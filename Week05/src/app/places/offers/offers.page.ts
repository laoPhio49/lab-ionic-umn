import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  places: Place[];

  constructor(
    private placesService: PlacesService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.places = this.placesService.getAllPlaces();
  }

  editOffer(id: String, slidingItem: IonItemSliding){
    slidingItem.close();
    this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', id]);
  }

}
