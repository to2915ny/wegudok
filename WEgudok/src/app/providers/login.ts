import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import 'rxjs/add/operator/map';

@Injectable()
export class Login {

    data: any;

  constructor(public httpClient: HttpClient,
    private router: Router,
    private alertCtrl: AlertController) {
    this.data = null;
  }



async login(credentials) {
    const headers = new HttpHeaders()
    .set("Content-Type","application/json;charset=utf-8'");
    this.httpClient.post('http://52.221.212.189:3000/',JSON.stringify(credentials),{headers})
    .subscribe(async res => {
        
        console.log(res);
        if(res['empty'] == 1000){
            this.router.navigateByUrl('/');
            const alert = await this.alertCtrl.create({
                header: '로그인 실패',
            message: '이메일이나 비밀번호가 잘못되었습니다.',
            buttons: ['OK']
            
          });
         
          await alert.present();  
        }
        else{
            this.router.navigateByUrl('/members');
        }
          
    });
        }
    
    /*
    this.auth.login(this.credentials).subscribe(async res => {
      if (res) {
        this.router.navigateByUrl('/members');
      } else {
        const alert = await this.alertCtrl.create({
          header: '로그인 실패',
          message: '이메일이나 비밀번호가 잘못되었습니다.',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  */
    

}