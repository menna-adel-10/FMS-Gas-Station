import { Component, HostListener, Input } from '@angular/core';



@Component({
  selector: 'app-alert-nav',
  templateUrl: './alert-nav.component.html',
  styleUrls: ['./alert-nav.component.scss'],

})
export class AlertNavComponent {

   @Input() collapsed = false;
  @Input() screenWidth = 0;

  ShowSearchOverlay = false;

   public value: Date = new Date();


  constructor() { }

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
