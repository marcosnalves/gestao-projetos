import { Component } from '@angular/core';
import { NavController, PopoverController, Popover } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth-service';
import { WelcomePage } from '../welcome/welcome';
import { LoginPage } from '../login/login';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { PopoverPage } from '../popover/popover';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private authService: AuthService, public popoverCtrl: PopoverController) {
  }
  presentPopover(myEvent) {
    const popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  signOut(){
    this.authService.signOut()
    .then(() =>{
      this.navCtrl.setRoot(WelcomePage)
    })
    .catch((error) => {
      console.error(error);
    });
  }
}
