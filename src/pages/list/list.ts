import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViacepProvider } from '../../providers/viacep/viacep';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  private cep;
  private endereco: any = {};
  vazio = "";

  constructor(public navCtrl: NavController, private viacep: ViacepProvider) { }

  getEndereco() {
    this.viacep.callService(this.cep)
      .subscribe(
        data => {
          this.endereco = data;
          console.log(data);
        }
      );
  }
}