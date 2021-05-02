import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddModalPage } from '../add-modal/add-modal.page';
import { AppModalPage } from '../app-modal/app-modal.page';
import { Account} from '../providers/account';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  progress = 0.50; 
  subs: any;
  modalDataResponse: any;
  dataReturned: any;
  user = null;
 
  constructor(public modalCtrl: ModalController, public modalController: ModalController,private auth: AuthService,public account : Account) {}

  
  ionViewWillEnter() {
    
    let a = this.account.getsubList().then((data) => {
      console.log(data);
      return this.subs = data;
    });
    
    
    /*this.subs.forEach(function(item){
      
      if(item['title'] =='Netflix'){
          sumNetflix += item['price'];
          if(max < item['date']){
            max = item['date']
             netflix = {'title': 'Netflix',
                        'date': item['date'],
                         'price' : item['price'],
                         'img' : 'assets/images/netflix.png'
                      }
          } 


      }
    });*/
    
     

    
  }
  ngOnInit(){
  
  }
  
  ionViewDidLoad(){
    
        
  }
 

 
  // logout() {
  //   this.auth.logout();
  // }




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
  
