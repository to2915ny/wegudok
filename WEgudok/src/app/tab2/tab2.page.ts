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
  public barChartLabels:string[] = ['1','2','3','4','5','6','7','8','9','10','11','12'];
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
