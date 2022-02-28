import { Component, OnInit } from '@angular/core';
import { NavController,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  value = '';
  options: string[];

  items: any;

  constructor(private navCtrl: NavController , public alertController: AlertController) {}

  ngOnInit() {
    if (localStorage.getItem('items')) {
      this.items = JSON.parse(localStorage.getItem('items'));
    }
  }
  addItem(){
    const obj = {
      value: this.value,
      isDone: false
    };
  this.items.unshift(obj);
  localStorage.setItem('items' , JSON.stringify(this.items));

  }
  deleteItem(ind){
   this.items = this.items.filter(( c,index) => index !== ind );
    localStorage.setItem('items' , JSON.stringify(this.items));


  }
  setDone(index){
    const item = this.items.find((c, ind)=> ind === index);
    item.isDone = !item.isDone;
    localStorage.setItem('items' , JSON.stringify(this.items))
;
  }
  clearInput(){
    this.value = '';
  }
  back(){

    this.navCtrl.navigateRoot('home');


}

async presentAlert(ind) {
  const alert = await this.alertController.create({
    cssClass: 'alert',
    header: 'Atenção!!',
    message: `Quer realmente deletar o item ?`,
    buttons: [{
      text: 'Excluir',
      handler: () =>  {this.deleteItem(ind);
   } },
'Cancelar'] ,

  });

  await alert.present();



}
//clearList(){
  //localStorage.clear();
//}

}
