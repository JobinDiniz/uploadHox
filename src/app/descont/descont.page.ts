import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

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

  constructor(   public navCtrl: NavController) { }

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
