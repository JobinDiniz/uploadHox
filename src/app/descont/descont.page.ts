import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-descont',
  templateUrl: './descont.page.html',
  styleUrls: ['./descont.page.scss'],
})
export class DescontPage implements OnInit {
t = 0;
d = 0;
f;
r;

  constructor(   public navCtrl: NavController, public alertController: AlertController) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alert',
      header: 'Atenção!!',
      message: `${this.f}  ${this.r}`,
      buttons: ['OK']
    });

    await alert.present();

  }

  ngOnInit() {
  }
  back(){

    this.navCtrl.navigateRoot('home');
 }
 resetD(){
this.t = 0;
this.d = 0;
this.f = '';
this.r = '';


 }
 doneD(){
   this.f =  `O valor do desconto é R$${(this.d*this.t)/100} ` ;
   this.r = `Valor com desconto é  R$${(this.t -(this.d*this.t)/100)}` ;

 }

}
