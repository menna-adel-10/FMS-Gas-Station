import { Component, OnInit } from '@angular/core';
import { MachinesData } from './machines-data';
import { INavbarData } from 'src/app/sidenav/helper';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss'],
})
export class MachinesComponent implements OnInit {
  public columns: number = 4;
  selectedCardIndex: number | undefined;
  DEFAULT_VALUE: number = 0;


  ngOnInit(): void {
    this.selectedCardIndex = this.DEFAULT_VALUE;
  }

  MachinesData = MachinesData;
  multiple: any;

  public getStyles() {
    return {
      display: 'grid',
      'grid-template-columns': `repeat(${this.columns}, minmax(100px, 1fr))`,
      'justify-items': 'center',
    };
  }


   handleClick(item: INavbarData): void {
    if (!this.multiple) {
      for (let modelItem of this.MachinesData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
    item.expanded = !item.expanded
   }


  selectCard(index: number): void {
  if (this.selectedCardIndex === index) {

    this.selectedCardIndex;
  } else {

    this.selectedCardIndex = index;
  }

    
  }
}
