import { Component } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent {

   isSideNavCollapsed = false;
  screenWidth = 0;
  loadedFeature = 'function';

}
