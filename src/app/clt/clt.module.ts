import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CltPageRoutingModule } from './clt-routing.module';
import { CltPage } from './clt.page';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';

// eslint-disable-next-line @typescript-eslint/naming-convention
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
    IonicModule,CurrencyMaskModule,
    CltPageRoutingModule,
  ],
  declarations: [CltPage],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }]
})
export class CltPageModule {}
