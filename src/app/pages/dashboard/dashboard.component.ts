import { Component, OnInit } from '@angular/core';
import { DashData, SalesData } from './dash-data';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent implements OnInit {

  Data = DashData;
  Sales = SalesData;

  barChart: any = [];
  radarChart: any = [];

  constructor() {
    Chart.register(...registerables)
  }

  ngOnInit(): void {
    this.barChart = new Chart('canva', {
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
          label: 'Activities',
          barPercentage: 0.5,
          barThickness: 20,
          maxBarThickness: 15,
          minBarLength: 0,

          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            '#FF7F5C',
            '#FF7F5C',
            '#FF7F5C',
            '#FF7F5C',
            '#FF7F5C',
            '#FF7F5C',
            '#FF7F5C'
          ],

          borderWidth: 1
        }]
      },
      options: {
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
    this.radarChart = new Chart('canvas', {
      type: 'radar',
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
          label: 'My First Dataset',
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: true,
          backgroundColor: '#009ACF33',
          borderColor: '#009ACF',
          pointBackgroundColor: '#00CBC0',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
          label: 'My Second Dataset',
          data: [28, 48, 40, 19, 96, 27, 100],
          fill: true,
          backgroundColor: '#009ACF33',
          borderColor: '#00CBC0',
          pointBackgroundColor: '#ff7f5c',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
      },
    })

  }


  getStateColor(color: any) {
    switch (color) {
      case '#FF7F5C':
        return 'orange-svg';
      case '#B9CDE2':
        return 'gray-svg';
      default:
        return 'unknown-svg';
    }
  }

}
