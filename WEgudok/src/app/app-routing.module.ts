import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'app-modal',
    loadChildren: () => import('./app-modal/app-modal.module').then( m => m.AppModalPageModule)
  },
  {
    path: 'add-modal',
    loadChildren: () => import('./add-modal/add-modal.module').then( m => m.AddModalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
