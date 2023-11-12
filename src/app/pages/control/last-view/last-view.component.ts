import { Component, OnInit } from '@angular/core';
import { View } from './view-dummy-data';

@Component({
  selector: 'app-last-view',
  templateUrl: './last-view.component.html',
  styleUrls: ['./last-view.component.scss']
})
export class LastViewComponent implements OnInit {

  selectedOption = 1;

  View = View;

  ngOnInit(): void {
  }


   getStateColor(image: any) {
  switch (image) {
    case 'assets/gas-station-svgrepo-com/orange.png':
      return 'orange-svg';
    case 'assets/gas-station-svgrepo-com/blue.png':
      return 'gray-svg';
    default:
      return 'unknown-svg';
  }
}
}
