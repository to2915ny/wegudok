import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppModalPageRoutingModule } from './app-modal-routing.module';

import { AppModalPage } from './app-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppModalPageRoutingModule
  ],
  declarations: [AppModalPage]
})
export class AppModalPageModule {}
