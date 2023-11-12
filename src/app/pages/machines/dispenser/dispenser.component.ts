import { Component, OnInit, ViewChild } from '@angular/core';
import { DispenserFormComponent } from './dispenser-form/dispenser-form.component';
import { StationNamesService } from 'src/app/services/station-names.service';
import { CoreService } from 'src/app/core/core.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';


@Component({
  selector: 'app-dispenser',
  templateUrl: './dispenser.component.html',
  styleUrls: ['./dispenser.component.scss']
})
export class DispenserComponent implements OnInit {

  @ViewChild(MatSort)
  sort!: MatSort;


  REQUESTS = [
    { dispenserName: 'Name', channelId: 1000, station: 'Station', line: 'K', order: '01', position: 'Right' },
    { dispenserName: 'Name', channelId: 1000, station: 'Station', line: 'D', order: '01', position: 'Right' },
    { dispenserName: 'Name', channelId: 1000, station: 'Station', line: 'A', order: '01', position: 'Right' },
    { dispenserName: 'Name', channelId: 1000, station: 'Station', line: 'K', order: '01', position: 'Right' },
    { dispenserName: 'Name', channelId: 1000, station: 'Station', line: 'A', order: '01', position: 'Right' },
    { dispenserName: 'Name', channelId: 1000, station: 'Station', line: 'D', order: '01', position: 'Right' },
  ];

  dataSource = new MatTableDataSource(this.REQUESTS);
  columnsToDisplay = ['dispenserName', 'channelId', 'station', 'line', 'order', 'position', 'state'];
  dataSubject = new BehaviorSubject<Element[]>([]);

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private _dialog: MatDialog,
    private _addService: StationNamesService,
    private _coreService: CoreService) {
    // Filter Icon
    this.matIconRegistry.addSvgIcon(
      `filterIcon`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`https://image.flaticon.com/icons/svg/1159/1159641.svg`)
    );
    // Sort Icon
    this.matIconRegistry.addSvgIcon(
      `sortIcon`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`https://image.flaticon.com/icons/svg/25/25756.svg`)
    );
    this.dataSource.data = this.REQUESTS;
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.getStation();
  }

  openAddEditForm() {
    const DialogRef = this._dialog.open(DispenserFormComponent);
    DialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getStation();
        }
      }
    })
  }

  getStation() {
    this._addService.getStation().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);

      },
      error: console.log,
    });
  }

  deleteStation(id: number) {
    this._addService.deleteStation(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Station deleted!', 'Done')
        this.getStation();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const DialogRef = this._dialog.open(DispenserFormComponent, {
      data,
    });

    DialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getStation();
        }
      }
    })
  }

  getStateColor(line: any) {
    switch (line) {
      case 'A':
      case 'D':
        return 'orange-svg';
      case 'K':
        return 'gray-svg';
      default:
        return 'unknown-svg';
    }
  }

}
