import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HalhomePage } from './halhome.page';
import { JoinClubComponent } from '../join-club/join-club.component';

const routes: Routes = [
  {
    path: '',
    component: HalhomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HalhomePage, JoinClubComponent],
  entryComponents: [JoinClubComponent]
})
export class HalhomePageModule {}
