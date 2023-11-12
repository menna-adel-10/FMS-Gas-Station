import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs-nav',
  templateUrl: './tabs-nav.component.html',
  styleUrls: ['./tabs-nav.component.scss']
})
export class TabsNavComponent {

   @Input() collapsed = false;
  @Input() screenWidth = 0;

  ShowSearchOverlay = false;

   public value: Date = new Date();


  constructor(public router: Router) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkShowSearchOverlay(window.innerWidth)
    }


  ngOnInit(): void {
    this.checkShowSearchOverlay(window.innerWidth);
  }


  getHeadClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen'
    }
    return styleClass;
  }

  checkShowSearchOverlay(innerWidth: number): void {
    if (innerWidth < 845) {
      this.ShowSearchOverlay = true;
    } else {
      this.ShowSearchOverlay = false;
    }
  }

}


