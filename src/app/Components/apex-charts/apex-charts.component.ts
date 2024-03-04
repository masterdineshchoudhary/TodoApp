import { Component, OnInit } from '@angular/core';
import { ApexChart } from 'ng-apexcharts';

@Component({
  selector: 'app-apex-charts',
  templateUrl: './apex-charts.component.html',
  styleUrl: './apex-charts.component.css',
})
export class ApexChartsComponent implements OnInit {
  
  public chartOptions: any = {};

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      series: [44, 55, 13],
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Series 1', 'Series 2', 'Series 3'], 
      title: {
        text: 'Sample Pie Chart'
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 300
          }
        }
      }]
    };
  }
}
