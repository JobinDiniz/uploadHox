import { Component, OnInit } from '@angular/core';
import { NavController,AlertController } from '@ionic/angular';
@Component({
  selector: 'app-percent',
  templateUrl: './percent.page.html',
  styleUrls: ['./percent.page.scss'],
})
export class PercentPage implements OnInit {
  n = 0;
  pe = 0;
  f;

  constructor(public navCtrl: NavController, public alertController: AlertController) { }

  async presentAlert() {
  const alert = await this.alertController.create({
    cssClass: 'alert',
    header: 'Atenção!!',
    message: `${this.f}`,
    buttons: ['OK']
  });

  await alert.present();

}


  ngOnInit() {
  }
  back(){

    this.navCtrl.navigateRoot('home');
 }
 resetP(){
this.n = 0;
this.pe = 0;
this.f = '';

 }

 doneP(){
   this.f = `O resultado é  ${((this.pe/this.n)*100)} %` ;
   if (this.n <=0){
     this.f = `Número invalido`;
    if(this.pe <=0){
      this.f = `Número invalido`;
    }
    if(this.pe === 0){
      this.f =`Número invalido` ;
    }
    if((this.n === 0) || (this.pe ===0 ))
    {
      this.f = `Número invalido`;
    }

   }
 }

}
