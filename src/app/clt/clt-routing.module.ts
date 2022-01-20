import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CltPage } from './clt.page';

const routes: Routes = [
  {
    path: '',
    component: CltPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CltPageRoutingModule {}
