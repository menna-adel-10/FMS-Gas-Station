import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  ShowSearchOverlay = false;




  constructor() {


  }

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
