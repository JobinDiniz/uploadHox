import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-percent',
  templateUrl: './percent.page.html',
  styleUrls: ['./percent.page.scss'],
})
export class PercentPage implements OnInit {
  n = 0;
  pe = 0;
  f;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  back(){

    this.navCtrl.navigateRoot('home');
 }
 resetP(){
this.n = 0;
this.pe = 0;
this.f = 0;

 }

 doneP(){
   this.f = `O resultado é  ${((this.pe/this.n)*100)} %` ;
   if (this.n <=0){
     this.f = `Error`;
    if(this.pe <=0){
      this.f = `Error`;
    }
    if(this.pe === 0){
      this.f = `Error`;
    }
    if((this.n === 0) || (this.pe ===0 )){
      this.f = `Errado`;
    }

   }
 }

}
