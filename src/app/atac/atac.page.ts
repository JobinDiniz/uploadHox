import { Component, OnInit } from '@angular/core';
import { NavController, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-atac',
  templateUrl: './atac.page.html',
  styleUrls: ['./atac.page.scss'],
})
export class AtacPage implements OnInit {
  at = 0;
  va = 0;


  constructor(public navCtrl: NavController,  public alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alert',
      header: 'Atenção!!',
      message: `O valor do desconto é R$${(this.at - this.va)}`,
      buttons: ['OK']
    });

    await alert.present();

  }


  ngOnInit() {
  }
  back(){
    this.navCtrl.navigateRoot('home');
  }
  resetAt(){
    this.at = 0;
    this.va = 0;

  }
}
