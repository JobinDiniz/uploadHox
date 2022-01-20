import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtacPage } from './atac.page';

const routes: Routes = [
  {
    path: '',
    component: AtacPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtacPageRoutingModule {}
