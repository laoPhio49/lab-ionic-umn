import { Injectable } from '@angular/core';
import { Ukm } from './Ukm.model';


@Injectable({
  providedIn: 'root'
})
export class UkmService {
  private ukms: Ukm[] = [
    new Ukm(
      'u1',
      'Basket',
      'UKM untuk bermain Basket'
    ),
    new Ukm(
      'u2',
      'Futsal',
      'UKM untuk bermain Futsal'
    ),
    new Ukm(
      'u3',
      'Voli',
      'UKM untuk bermain Voli'
    ),
    new Ukm(
      'u4',
      'Badminton',
      'UKM untuk bermain Badminton'
    ),
    new Ukm(
      'u5',
      'Ping Pong',
      'UKM untuk bermain Ping Pong'
    )
  ];

  private joinedClub: Ukm[] = [];

  constructor() { }

  getAllUkm(){
    return [...this.ukms];
  }

  getUkm(ukmId: string){
    return{
      ...this.ukms.find(u =>{
        return u.id === ukmId;
      })
    }
  }

  deleteUkm(ukmId: string){
    return [
      ...this.ukms = this.ukms.filter(
        u => {
          return u.id != ukmId;
        }
      )
    ]
  }

  getAllClub(){
    return [...this.joinedClub];
  }

  deleteClub(ukmId: string){
    return [
      ...this.joinedClub = this.joinedClub.filter(
        c => {
          return c.id != ukmId;
        }
      )
    ]
  }

  addClub(club: Ukm){
    this.joinedClub.push(club);
  }
}
