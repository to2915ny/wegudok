import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Register} from '../providers/register';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  masks: any;

  phoneNumber: any = "";
  email: any;
  name:any;
  password:any;

  constructor(public navCtrl: NavController,public register:Register) { 
    this.masks = {
      phoneNumber: ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
    };
  }

  ngOnInit() {
  }

  save(){
    let unmaskedData = {
      phoneNumber: this.phoneNumber.replace(/\D+/g, ''),
      email : this.email,
      name : this.name,
      password : this.password
    };
    this.register.register(unmaskedData);
    //console.log(unmaskedData);
  }


}
