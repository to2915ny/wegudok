import { Component } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar'


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  date: string;
  type: 'string';


  onChange($event) {
    console.log($event);
  }

  options: CalendarComponentOptions = {
    monthFormat: 'YYYY 년 MM 월 ',
    weekdays: ['토', '일', '월', '화', '수', '목', '금'],
    weekStart: 1,
    
  };

  constructor() { }
  

}

