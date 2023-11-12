import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from "@angular/platform-browser";
import {MatSort} from '@angular/material/sort';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { NozzleFormComponent } from './nozzle-form/nozzle-form.component'
import { StationNamesService } from 'src/app/services/station-names.service';
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-nozzle',
  templateUrl: './nozzle.component.html',
  styleUrls: ['./nozzle.component.scss']
})
export class NozzleComponent implements OnInit {

   @ViewChild(MatSort)
  sort!: MatSort;


  REQUESTS = [
    {nozzleName: 'Name', channelId: 1000, station: 'Station', dispenser: 'Dispenser'},
    {nozzleName: 'Name', channelId: 1000, station: 'Station', dispenser: 'Closed'},
    {nozzleName: 'Name', channelId: 1000, station: 'Station', dispenser: 'Closed'},
    {nozzleName: 'Name', channelId: 1000, station: 'Station', dispenser: 'Dispenser'},
    {nozzleName: 'Name', channelId: 1000, station: 'Station', dispenser: 'Closed'},
    {nozzleName: 'Name', channelId: 1000, station: 'Station', dispenser: 'Dispenser'},
  ];

  dataSource = new MatTableDataSource(this.REQUESTS);
  columnsToDisplay = ['nozzleName', 'channelId', 'station', 'dispenser', 'state'];
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
    const DialogRef = this._dialog.open(NozzleFormComponent);
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
    const DialogRef = this._dialog.open(NozzleFormComponent, {
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

  getStateColor(dispenser: any) {
  switch (dispenser) {
    case 'Dispenser':
      return 'orange-svg';
    case 'Closed':
      return 'gray-svg';
    default:
      return 'unknown-svg';
  }
}


}
