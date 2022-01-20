import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.page.html',
  styleUrls: ['./menupage.page.scss'],
})
export class MenupagePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  enterE(){
    this.navCtrl.navigateRoot('clt');
    }
    enterCo(){
      this.navCtrl.navigateRoot('comp');
      }
    enterC(){
      this.navCtrl.navigateRoot('menupage');
      }
     enterP(){

      this.navCtrl.navigateRoot('percent');
   }
    enterA(){

    this.navCtrl.navigateRoot('atac');
 }
 enterL(){

  this.navCtrl.navigateRoot('list');
}
enterD(){

  this.navCtrl.navigateRoot('descont');
}
}

