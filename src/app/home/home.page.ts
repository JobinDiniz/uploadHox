import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  p: number;
  h: number;
  result;
  a;
  f;
  hours;
  minutes;

  constructor(public navCtrl: NavController) {}

  reseT(){
this.p = 0;
this.h = 0;

  }

calcH(){
  if(this.p === 0){
    this.f = 'número invalido 1';
  }
  if(this.h === 0){
    this.f = 'número invalido 2';
  }
  if(this.p >0 && this.h> 0){
this.result= (this.p)/(this.h);
 this.result =this.result.toFixed(1)* 60 ;
 this.hours = Math.trunc(this.result/60);
 this.minutes = this.result %60;
 if(this.result <1){
   return ;
 }
 if(this.result > 1){
 this.f = `${this.hours}`+  ' hora (s)'  + ' e '  +  `${this.minutes}` + ' minuto (s) ';
}

}
}
calcD(){

  if(this.p === 0){
    this.f = 'número invalido 1';
  }
  if(this.h === 0){
    this.f = 'número invalido 2';
  }
  if(this.p >0 && this.h> 0){
    this.result = ((this.p)/(this.h))/24;
    this.f =`Custou ${this.result.toFixed()} dia (s)`;
}
}
calcM(){
  if(this.p === 0){
    this.f = 'número invalido 1';
  }
  if(this.h === 0){
    this.f = 'número invalido 2';
  }
  if(this.p >0 && this.h> 0){
  this.result = ((this.p)/(this.h))/(30*24);

  this.f =`Custou ${this.result.toFixed()} mês (s)`;
  }
}
calcY(){
  if(this.p === 0){
    this.f = 'número invalido 1';
  }
  if(this.h === 0){
    this.f = 'número invalido 2';
  }
  if(this.p >0 && this.h> 0){
 this.result = ((this.p)/(this.h))/8760;
 this.f = `Custou ${this.result.toFixed(1)} de ano(s)`;
  }
}

enterE(){
this.navCtrl.navigateRoot('clt');
}
back(){
  this.navCtrl.navigateRoot('home');
}

}
