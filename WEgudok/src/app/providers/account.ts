import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class Account {

  data: any;

  constructor(public httpClient: HttpClient) {
    this.data = null;
  }

  async getTransactions(){
        
    const headers = new HttpHeaders()
        .set("Content-Type","application/json")
        .set("appKey",'l7xxzgr6bTqrCxyGZpPclrHBPlD1RXNcMzrz')
    const url = '/oai/wb/v1/login/getCellCerti';
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
                "HP_NO": "01012345678",
                "HP_CRTF_AGR_YN": "Y",
                "FNM": "홍길동",
                "RRNO_BFNB": "930216",
                "ENCY_RRNO_LSNM": "1234567"
              }
            
        
        }      ,{headers}).subscribe(
            (val) => {
                console.log("Post call successful value returned in body",val);
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
