import { Component, OnInit } from '@angular/core';
import { NavController,AlertController } from '@ionic/angular';



@Component({
  selector: 'app-comp',
  templateUrl: './comp.page.html',
  styleUrls: ['./comp.page.scss'],
})
export class CompPage implements OnInit {

  k = 'gramas';
  change = false;
  result = '';
  a = 0;
  b = 0;
  c = 0;
  d = 0;
  x = 0;
  y = 0;

  constructor(public navCtrl: NavController, public alertController: AlertController ) {
}

  ngOnInit() {
  }

  calcularIMC() {

    this.x = this.a / this.b;
    this.y = this.c / this.d;

    if (this.x > this.y) {
     this.result =`O Produto de peso <strong>${this.d} </strong>  é mais vantajoso`; ;
    }
    if (this.x < this.y){
      this.result =`O Produto de peso <strong>${this.b} </strong> ${this.k}  é mais vantajoso`;
    }

    if (this.a  === 0 || this.b  === 0 || this.c === 0 || this.d === 0 )
    {
      this.result ='Número Inválido!! ';
    }

      if( this.x === this.y){
        this.result = 'Ambos são vantajosos';
    }
  }
   onChange()
  {
    this.change = !this.change;


  }

  resetIMC() {
    this.a = 0;
    this.b = 0;
    this.c = 0;
    this.d = 0;
    this.result = '';

  }

  back(){

    this.navCtrl.navigateRoot('home');
 }
 async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alert',
      header: 'Atenção!!',
      message: `${this.result}`,
      buttons: ['OK']
    });

    await alert.present();

  }

}
