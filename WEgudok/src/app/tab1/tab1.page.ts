import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppModalPage } from '../app-modal/app-modal.page';
import { Account} from '../providers/account';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  modalDataResponse: any;

  constructor(public modalCtrl: ModalController,public account : Account) {}

  getTransactions(){
    this.account.getTransactions();
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


}
  
