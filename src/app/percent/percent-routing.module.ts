import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PercentPage } from './percent.page';

const routes: Routes = [
  {
    path: '',
    component: PercentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PercentPageRoutingModule {}
