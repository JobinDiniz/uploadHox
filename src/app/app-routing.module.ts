import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./menupage/menupage.module').then( m => m.MenupagePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'clt',
    loadChildren: () => import('./clt/clt.module').then( m => m.CltPageModule)
  },
  {
    path: 'menupage',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'percent',
    loadChildren: () => import('./percent/percent.module').then( m => m.PercentPageModule)
  },
  {
    path: 'atac',
    loadChildren: () => import('./atac/atac.module').then( m => m.AtacPageModule)
  },
  {
    path: 'comp',
    loadChildren: () => import('./comp/comp.module').then( m => m.CompPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'descont',
    loadChildren: () => import('./descont/descont.module').then( m => m.DescontPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
