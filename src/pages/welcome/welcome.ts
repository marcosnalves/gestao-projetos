import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    //Copiar o abaixo para todas as paginas criadas, pois o mesmo trava em portrait.
    private screenOrientation: ScreenOrientation) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  registro(){
    this.navCtrl.push(RegisterPage)
  };

  login(){
    this.navCtrl.push(LoginPage)
  };
}
