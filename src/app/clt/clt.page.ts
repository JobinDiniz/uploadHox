import { Component, OnInit } from '@angular/core';
import { NavController,AlertController} from '@ionic/angular';


@Component({
  selector: 'app-clt',
  templateUrl: './clt.page.html',
  styleUrls: ['./clt.page.scss'],
})
export class CltPage implements OnInit {
  p = 0;
  h = 0;
  result;
  a;
  f;
  hours;
  minutes;
  constructor(public navCtrl: NavController , public alertController: AlertController) { }

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


  reseT(){
this.p = 0;
this.h = 0;
this.f = '';

  }

calcH(){
  if(this.p === 0){
    this.f = 'Número invalido ';
  }
  if(this.h === 0){
    this.f = 'Número invalido ';
  }
  if(this.p >0 && this.h> 0){
this.result= (this.p)/(this.h);
 this.result =this.result.toFixed(1)* 60 ;
 this.hours = Math.trunc(this.result/60);
 this.minutes = this.result %60;
 this.f = `${this.hours}`+  ' hora (s)'  + ' e '  +  `${this.minutes}` + ' minuto (s) ';

  }
}

calcD(){
  if(this.p === 0){
    this.f = 'Número invalido ';
  }
  if(this.h === 0){
    this.f = 'Número invalido ';
  }
  if(this.p >0 && this.h> 0){
    this.result = ((this.p)/(this.h))/8;
 this.f =`Custou ${this.result.toFixed()} dia (s)`;


}
}
calcM(){
  if(this.p === 0){
    this.f = 'Número invalido ';
  }
  if(this.h === 0){
    this.f = 'Número invalido ';
  }
  if(this.p >0 && this.h> 0){
  this.result = ((this.p)/(this.h))/(220);
  this.f =`Custou aproximadamente  ${this.result.toFixed()} mês (s)`;
}
}
calcY(){
  if(this.p === 0){
    this.f = 'Número invalido ';
  }
  if(this.h === 0){
    this.f = 'Número invalido ';
  }
  if(this.p >0 && this.h> 0){
 this.result = ((this.p)/(this.h))/2640;
 this.f = `Custou aproximadamente ${this.result.toFixed(1)} de ano(s)`;
}

}



}
