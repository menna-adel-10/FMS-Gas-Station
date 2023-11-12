import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AlertData } from './alert-data';
import { Chart, registerables } from 'chart.js';


@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlanningComponent implements OnInit {

  AlertData = AlertData;
  barChart: any = [];
  

  constructor() {
    Chart.register(...registerables)
  }

  ngOnInit(): void {

    this.barChart = new Chart('bar', {
      type: 'bar',
     data: {
  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
  ],
  datasets: [{
    label: 'Classification',
    barPercentage: 0.5,
        barThickness: 60,
        maxBarThickness: 95,
        minBarLength: 0,

    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      '#4D5097',
      '#F7B801',
      '#00CBC0',
      '#FF7F5C',
      '#009ACF',
      '#E3A986',
      '#C44536'

    ],

    borderWidth: 1
  }]
       },
         options: {
       responsive: true,
    scales: {
      y: {
        beginAtZero: true,

      },
         x: {

            grid: {
              offset: true
            }
         },
    }
  },
    })

    window.addEventListener('beforeprint', () => {
  this.barChart.resize(10, 10);
});
window.addEventListener('afterprint', () => {
  this.barChart.resize();
});
  }



}
