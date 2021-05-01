import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  masks: any;

  phoneNumber: any = "";

  constructor(public navCtrl: NavController) { 
    this.masks = {
      phoneNumber: ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
    };
  }

  ngOnInit() {
  }

  save(){
    let unmaskedData = {
      phoneNumber: this.phoneNumber.replace(/\D+/g, '')
    };
    console.log(unmaskedData);
  }


}
