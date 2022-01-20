import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-percent',
  templateUrl: './percent.page.html',
  styleUrls: ['./percent.page.scss'],
})
export class PercentPage implements OnInit {
  n: number;
  pe: number;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  back(){

    this.navCtrl.navigateRoot('home');
 }
 resetP(){
this.n = 0;
this.pe = 0;

 }

}
