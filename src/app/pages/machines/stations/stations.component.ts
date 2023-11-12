import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from "@angular/platform-browser";
import {MatSort} from '@angular/material/sort';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from '../add-edit/add-edit.component';
import { StationNamesService } from 'src/app/services/station-names.service';
import { CoreService } from 'src/app/core/core.service';


@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss'],

})
export class StationsComponent implements OnInit {

  @ViewChild(MatSort)
  sort!: MatSort;


  REQUESTS = [
    {stationName: 'Name', channelId: 1000, location: '2 Street, City, Country', description: 'Draft'},
    {stationName: 'Name', channelId: 1000, location: '2 Street, City, Country', description: 'Submitted'},
    {stationName: 'Name', channelId: 1000, location: '2 Street, City, Country', description: 'Submitted'},
    {stationName: 'Name', channelId: 1000, location: '2 Street, City, Country', description: 'Closed'},
    {stationName: 'Name', channelId: 1000, location: '2 Street, City, Country', description: 'Draft'},
    {stationName: 'Name', channelId: 1000, location: '2 Street, City, Country', description: 'Closed'},
  ];

  dataSource = new MatTableDataSource(this.REQUESTS);
  columnsToDisplay = ['stationName', 'channelId', 'location', 'description', 'state'];
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
    const DialogRef = this._dialog.open(AddEditComponent);
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
    const DialogRef = this._dialog.open(AddEditComponent, {
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

  getStateColor(description: any) {
  switch (description) {
    case 'Submitted':
    case 'Draft':
      return 'orange-svg';
    case 'Closed':
      return 'gray-svg';
    default:
      return 'unknown-svg';
  }
}


}
