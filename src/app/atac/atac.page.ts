import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-atac',
  templateUrl: './atac.page.html',
  styleUrls: ['./atac.page.scss'],
})
export class AtacPage implements OnInit {
  at: number;
  va: number;

  constructor(public navCtrl: NavController) { }

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
