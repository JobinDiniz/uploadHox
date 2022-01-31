import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescontPageRoutingModule } from './descont-routing.module';

import { DescontPage } from './descont.page';
import { CurrencyMaskConfig,CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';



export const customCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'center',
  allowNegative: false,
  decimal: ',',
  precision: 2,
  prefix: '',
  suffix: '',
  thousands: '.'
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescontPageRoutingModule,CurrencyMaskModule
  ],
  declarations: [DescontPage],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: customCurrencyMaskConfig }]
})
export class DescontPageModule {}
