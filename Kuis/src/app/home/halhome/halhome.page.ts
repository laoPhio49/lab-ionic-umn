import { Component, OnInit } from '@angular/core';
import { Ukm } from '../Ukm.model';
import { UkmService } from '../ukm.service';
import { ActionSheetController, ModalController, AlertController } from '@ionic/angular';
import { JoinClubComponent } from '../join-club/join-club.component';

@Component({
  selector: 'app-halhome',
  templateUrl: './halhome.page.html',
  styleUrls: ['./halhome.page.scss'],
})
export class HalhomePage implements OnInit {
  loadedUkm: Ukm[];
  
  constructor(
    private ukmService: UkmService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    console.log(this.loadedUkm);
    this.loadedUkm = this.ukmService.getAllUkm();
    console.log(this.loadedUkm);
  }

  async onJoin(ukm: Ukm){
    const alert = await this.alertController.create({
      message: "Beneran Mau Join?",
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Serius',
          handler: () => {
            console.log("Masuk UKM");
            console.log(ukm);
            this.ukmService.addClub(ukm);
          }
        }
      ]
    });
    await alert.present();
  }

}
