import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class Account {

  data: any;

  constructor(public httpClient: HttpClient) {
    this.data = null;
  }
    
  getsubList(){
    if (this.data) {
        return Promise.resolve(this.data);
      }

      return new Promise(resolve => {
    const headers = new HttpHeaders()
        .set("Content-Type","application/json;charset=utf-8'");
        this.httpClient.get('http://52.221.212.189:3000/sublist').
        map(res => res)
        .subscribe(data => {
            this.data = data;
            resolve(this.data);


        })

  })

}
}
