import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { AuthService } from '../../providers/auth/auth-service';

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  template: `
    <ion-list>
      <button ion-item (click)="signOut()">LogOut</button>
      <button ion-item (click)="close()">Documentation</button>
      <button ion-item (click)="close()">Showcase</button>
      <button ion-item (click)="close()">GitHub Repo</button>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public authService: AuthService) { }

  signOut() {
    this.viewCtrl.dismiss();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    this.authService.signOut()
      .then(() => {
        this.navCtrl.setRoot(WelcomePage)
      })
      .catch((error) => {
        console.error(error);
      });
  }


  close() {
    this.viewCtrl.dismiss();
  }
}