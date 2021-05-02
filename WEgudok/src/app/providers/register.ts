import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import 'rxjs/add/operator/map';


@Injectable()
export class Register {

    data: any;

    constructor(public httpClient: HttpClient,
      private router: Router,
      private alertCtrl: AlertController) {
      this.data = null;
    }

    async register(userinfo){
        const headers = new HttpHeaders()
        .set("Content-Type","application/json")
        .set("appKey",'l7xxzgr6bTqrCxyGZpPclrHBPlD1RXNcMzrz')
    const url = '/oai/wb/v1/login/getCellCerti';//인증 요청
    this.httpClient.post(url,
        {

            "dataHeader": {
                "UTZPE_CNCT_IPAD": "10.0.0.1",
                "UTZPE_CNCT_MCHR_UNQ_ID": "EBSEQ12",
                "UTZPE_CNCT_TEL_NO_TXT": "",
                "UTZPE_CNCT_MCHR_IDF_SRNO": "",
                "UTZ_MCHR_OS_DSCD": "",
                "UTZ_MCHR_OS_VER_NM": "",
                "UTZ_MCHR_MDL_NM": "",
                "UTZ_MCHR_APP_VER_NM": ""
              },
              "dataBody": {
                "COMC_DIS": "1",
                "HP_NO": userinfo.phoneNumber,
                "HP_CRTF_AGR_YN": "Y",
                "FNM": userinfo.name,
                "RRNO_BFNB": "930216",
                "ENCY_RRNO_LSNM": "1234567"
              }
            
        
        }      ,{headers}).subscribe(
            (val) => {
                console.log("Post call successful value returned in body",val);
                const headers = new HttpHeaders()
                    .set("Content-Type","application/json")
                    .set("appKey",'l7xxzgr6bTqrCxyGZpPclrHBPlD1RXNcMzrz');
                const url = '/oai/wb/v1/login/executeCellCerti'; //인증 수행
                this.httpClient.post(url,{
                    "dataHeader": {
                        "UTZPE_CNCT_IPAD": "1.1.1.1",
                        "UTZPE_CNCT_MCHR_UNQ_ID": "3B5E6E7B",
                        "UTZPE_CNCT_TEL_NO_TXT": "",
                        "UTZPE_CNCT_MCHR_IDF_SRNO": "",
                        "UTZ_MCHR_OS_DSCD": "",
                        "UTZ_MCHR_OS_VER_NM": "",
                        "UTZ_MCHR_MDL_NM": "",
                        "UTZ_MCHR_APP_VER_NM": ""
                      },
                      "dataBody": {
                        "RRNO_BFNB": "930216",
                        "ENCY_RRNO_LSNM": "1234567",
                        "ENCY_SMS_CRTF_NO": "1111111",
                        "CRTF_UNQ_NO": val['dataBody']['CRTF_UNQ_NO']
                      }
                    }
                      ,{headers}).subscribe(
                        (val) =>{
                            console.log("Authorization Success!",val);
                            
                            let completeuserinfo ={
                                phonenumber : userinfo.phoneNumber,
                                email : userinfo.email,
                                accountno : val['dataBody']['REPT_FA'][0]["CUS_USG_ACNO" ],
                                password : userinfo.password,
                                name : userinfo.name

                            }
                            const headers = new HttpHeaders()
                                .set("Content-Type","application/json;charset=utf-8'");
                            this.httpClient.post('http://52.221.212.189:3000/register',JSON.stringify(completeuserinfo),{headers}) //백엔드로 데이터 보냄
                            .subscribe(async res => {
                                if(res['Registered!'] == 200){
                                    this.router.navigateByUrl('/members'); //문제없이 저장되면 메인페이지로 이동

                                }
                            });

                        },
                        response => {console.log("Authorization Error",response)},
                        () => {console.log("Authorization Complete!")}

                      );
                    
                    

                
                
            },
            response => {
                console.log("ERROR",response);
            },
            () => {
                console.log("The POST observable is now complete");
            }
        );
    }
    

}