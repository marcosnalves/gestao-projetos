import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  Nome:string;  
  Username:string;
  Password:string;
  RePassword:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
//    if (this.Username.length == 0 || this.Password.length == 0 || this.RePassword.length == 0 || this.Nome.length==0)
//    alert("Favor preencher todos os campos")
      this.storage.set('Username', this.Username),
      this.storage.set('nome', this.Nome),
      this.storage.set('Password', this.Password)
  }
  confirma(){
    this.storage.get('Username').then((valuser) =>{
      console.log(valuser)
    });
    this.storage.get('nome').then((valname) => {
      console.log(valname)
    });
    this.storage.get('Password').then((valpass) => {
      console.log(valpass)
    });
  }
}
