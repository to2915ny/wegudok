import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page{

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    scaleShowHorizontalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40, 70, 98, 56,12,34,56], label: '구독료'},
  ];

  public chartColors: any[] = [
    { 
      backgroundColor: "#057af0"
      // backgroundColor:["#1f46a6", "#1f87a6", "#1fa6a2", "#1f46a6", "#1f87a6", "#1fa6a2","#1f46a6", "#1f87a6", "#1fa6a2","#1f46a6", "#1f87a6", "#1fa6a2"] 
    }];
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  constructor() { }


}
