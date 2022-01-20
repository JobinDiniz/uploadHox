import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompPageRoutingModule } from './comp-routing.module';

import { CompPage } from './comp.page';
import { CurrencyMaskConfig,CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';



export const customCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'center',
  allowNegative: false,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.'
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompPageRoutingModule,
    CurrencyMaskModule,ReactiveFormsModule
  ],
  declarations: [CompPage],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: customCurrencyMaskConfig }]
})
export class CompPageModule {}
