import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'screen1',
    loadChildren: () =>
      import('./screen1/screen1.module').then(m => m.Screen1PageModule)
  },
  {
    path: 'screen2',
    loadChildren: () => import('./screen2/screen2.module').then( m => m.Screen2PageModule)
  },
  {
    path: 'screen3',
    loadChildren: () => import('./screen3/screen3.module').then( m => m.Screen3PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
