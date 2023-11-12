import { registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';


interface SidenavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FMS';
  showSideNav = true;

  constructor(private router: Router) {
    router.events.subscribe(
      (val) => {
      if (val instanceof NavigationEnd || val instanceof NavigationStart) {
        if (val.url == '/logout') {
          this.showSideNav = false;
        }
        else {
          this.showSideNav = true;
        }

      }
      }
    )
  }

  isSideNavCollapsed = false;
  screenWidth = 0;
  loadedFeature = 'function';


  onToggleSideNav(data: SidenavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  onNavigate(feature: string): void {
    this.loadedFeature = feature;
  }
}
