import { Component, OnInit } from '@angular/core';
import { Ukm } from '../Ukm.model';
import { UkmService } from '../ukm.service';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-halprofile',
  templateUrl: './halprofile.page.html',
  styleUrls: ['./halprofile.page.scss'],
})
export class HalprofilePage implements OnInit {
  private club: Ukm[];

  constructor(
    private ukmService: UkmService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.club = this.ukmService.getAllClub();
  }

  onDeleteClub(id: string, slidingItem: IonItemSliding){
    slidingItem.close();
    this.ukmService.deleteClub(id);
    this.club = this.ukmService.getAllClub();
  }

}
