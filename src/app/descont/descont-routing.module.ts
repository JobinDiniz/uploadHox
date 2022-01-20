import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescontPage } from './descont.page';

const routes: Routes = [
  {
    path: '',
    component: DescontPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescontPageRoutingModule {}
