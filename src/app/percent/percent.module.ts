import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PercentPageRoutingModule } from './percent-routing.module';

import { PercentPage } from './percent.page';
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
    PercentPageRoutingModule,ReactiveFormsModule,CurrencyMaskModule
  ],
  declarations: [PercentPage],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: customCurrencyMaskConfig }]
})
export class PercentPageModule {}
