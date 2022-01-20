/* eslint-disable @typescript-eslint/naming-convention */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { HomePageRoutingModule } from './home-routing.module';
import { CltPage } from '../clt/clt.page';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
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
    HomePageRoutingModule,CurrencyMaskModule,
  ],
  declarations: [HomePage],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }]
})
export class HomePageModule {}
