import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.page.html',
  styleUrls: ['./comp.page.scss'],
})
export class CompPage implements OnInit {

  change = false;
  result = '';
  entryForm: FormGroup;
  a = 0;
  b = 0;
  c = 0;
  d = 0;
  ab;
  cd;

  constructor(
    public navCtrl: NavController,private builder: FormBuilder
  ) {
    this.entryForm = builder.group({
    a: new FormControl('', Validators.required),
    b: new FormControl('', Validators.required),
    c:  new FormControl('', Validators.required),
    d:  new FormControl('', Validators.required),
  });
}

  ngOnInit() {
  }
  calcularIMC() {
    if (this.a === 0 ) {
      this.result =`Campo com número nulo`;
   }
   if (this.b === 0 ) {
    this.result =`Campo com número nulo`;
    }
    if (this.c === 0 ) {
      this.result =`Campo com número nulo`;
   }
  if (this.d === 0 ) {
    this.result =`Campo com número nulo`;
  }
  if (this.ab === 0 ) {
    this.result =`Campo com número nulo`;
  }
  if (this.cd === 0 ) {
    this.result =`Campo com número nulo`;
  }

    if (this.ab < this.cd) {
     this.result =`O Produto de ${this.d}  é mais vantajoso`;
    }
    else {

      this.result =`O Produto de ${this.b}  é mais vantajoso`;
    }
    if (this.a < 0 ) {
      return;
    }
    if (this.b < 0 ) {
      return;
    }
    if (this.c < 0 ) {
      return;
    }
    if(this.d < 0) {
      return;

    }
   this.ab = this.a / this.b;
    this.cd = this.c / this.d;

    if (this.cd === this.ab ) {
      if(this.a === 0){
        this.result = `A zero`;
      }
    }
    if (this.ab === this.cd ||  this.a  === 0 || this.b  === 0 || this.c === 0 || this.d === 0 )  {
      this.result ='A nulidade ';
      if( this.a > 0 && this.b  > 0 && this.c > 0 && this.d > 0){
        this.result = 'Ambos são vantajosos';
      }
    }
  if ( this.entryForm.controls.a.hasError('required') && this.entryForm.controls.a.touched ){
   this.result = 'O campo de valor é obrigatório!';
  }
   if(this.entryForm.controls.b.hasError('required') &&  this.entryForm.controls.b.touched){
    this.result = 'O campo de valor é obrigatório!';
  }
    if (this.entryForm.controls.c.hasError('required') && this.entryForm.controls.c.touched ){
      this.result = 'O campo de valor é obrigatório!';
    }

    if( this.entryForm.controls.d.hasError('required') &&  this.entryForm.controls.d.touched ){
    this.result = 'O campo de valor é obrigatório!';

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


