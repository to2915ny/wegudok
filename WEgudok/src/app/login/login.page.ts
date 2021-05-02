import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Login} from '../providers/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
    email: any; 
    password: any; 
  
    

  constructor(
    public checklogin : Login,
    private auth: AuthService,
    private router: Router,
    private alertCtrl: AlertController
  ) {
    
  }
 

  ngOnInit() {
  }
  
  
  login(){
    let jsondata = {
      email : this.email,
      password : this.password
    };
    
    this.checklogin.login(jsondata);

  }

}
