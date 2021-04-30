import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, LOCALE_ID  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    CalendarModule,
    Tab3PageRoutingModule,
  ],
  declarations: [Tab3Page],
  providers: [{ provide: LOCALE_ID, useValue: 'ko-KR' }]
})
export class Tab3PageModule {}
