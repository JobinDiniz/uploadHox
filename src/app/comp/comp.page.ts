import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-comp',
  templateUrl: './comp.page.html',
  styleUrls: ['./comp.page.scss'],
})
export class CompPage implements OnInit {

  result = '';
  a = 0;
  b = 0;
  c = 0;
  d = 0;
  x = 0;
  y = 0;

  constructor(public navCtrl: NavController ) {
}

  ngOnInit() {
  }
  calcularIMC() {

    this.x = this.a / this.b;
    this.y = this.c / this.d;

    if (this.x > this.y) {
     this.result =`O Produto de peso ${this.d}  é mais vantajoso`;
    }
    if (this.x < this.y){
      this.result =`O Produto de peso ${this.b}  é mais vantajoso`;
    }

    if (this.a  === 0 || this.b  === 0 || this.c === 0 || this.d === 0 )
    {
      this.result ='Número Inválido!! ';
    }
    if(this.b === this.d){
      this.result = 'Pesos idênticos!!';
    }
      if( this.x === this.y){
        this.result = 'Ambos são vantajosos';
    }
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
}
