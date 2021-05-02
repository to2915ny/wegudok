import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule} from '@ionic/storage-angular';

import { Account } from './providers/account';
import { Login } from './providers/login';
import { Register } from './providers/register';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [ 
    FormsModule,  
BrowserModule, IonicModule.forRoot(), AppRoutingModule,IonicStorageModule.forRoot(), HttpClientModule],
  providers: [Register,Account,Login,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
