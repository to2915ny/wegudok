import { Component } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar'


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  dateRange: { from: string; to: string; };
  type: 'string';

  optionsRange: CalendarComponentOptions = {
    monthFormat: 'YYYY 년 MM 월 ',
    weekdays: ['토', '일', '월', '화', '수', '목', '금'],
    monthPickerFormat: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    weekStart: 1
  };

  constructor() { }

}
  

