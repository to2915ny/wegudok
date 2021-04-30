import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppModalPage } from './app-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AppModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppModalPageRoutingModule {}
