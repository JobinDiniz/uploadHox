import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-descont',
  templateUrl: './descont.page.html',
  styleUrls: ['./descont.page.scss'],
})
export class DescontPage implements OnInit {
t: number;
d: number;

  constructor(   public navCtrl: NavController) { }

  ngOnInit() {
  }
  back(){

    this.navCtrl.navigateRoot('home');
 }
 resetD(){
this.t = 0;
this.d = 0;

 }

}
