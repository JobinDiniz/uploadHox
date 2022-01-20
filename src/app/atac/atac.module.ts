import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtacPageRoutingModule } from './atac-routing.module';

import { AtacPage } from './atac.page';
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
    AtacPageRoutingModule,CurrencyMaskModule,
  ],
  declarations: [AtacPage],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: customCurrencyMaskConfig }]
})
export class AtacPageModule {}
