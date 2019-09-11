import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuController: MenuController,
    private router: Router,
    private authService: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  menuClose(){
    this.menuController.close();
  }

  menuToDiscover(){
    this.router.navigateByUrl('/places/tabs/discover/');
    this.menuClose();
  }

  menuToBooking(){
    this.router.navigateByUrl('/places/tabs/offers')
    this.menuClose();
  }

  onLogout(){
    this.authService.logout();
    this.router.navigateByUrl('/auth');
    this.menuClose();
  }
}
