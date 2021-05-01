import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddModalPage } from '../add-modal/add-modal.page';
import { AppModalPage } from '../app-modal/app-modal.page';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  modalDataResponse: any;
  dataReturned: any;
  user = null;
 
  constructor(public modalCtrl: ModalController, public modalController: ModalController,private auth: AuthService) {}

  ionViewWillEnter() {
    this.user = this.auth.getUser();
  }
 
  logout() {
    this.auth.logout();
  }


  async initModal() {
    const modal = await this.modalCtrl.create({
      component: AppModalPage,
      componentProps: {
        'name': 'Netflix'
      }
    });
  

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        console.log('Modal Sent Data : '+ modalDataResponse.data);
      }
    });

    return await modal.present();
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: AddModalPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });


    return await modal.present();
  }


}
  
