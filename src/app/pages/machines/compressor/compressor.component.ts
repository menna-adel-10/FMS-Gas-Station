import { Component, OnInit, ViewChild } from '@angular/core';
import { CompressorFormComponent } from './compressor-form/compressor-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { CoreService } from 'src/app/core/core.service';
import { StationNamesService } from 'src/app/services/station-names.service';

@Component({
  selector: 'app-compressor',
  templateUrl: './compressor.component.html',
  styleUrls: ['./compressor.component.scss']
})
export class CompressorComponent implements OnInit {

   @ViewChild(MatSort)
  sort!: MatSort;


  REQUESTS = [
    {compressorName: 'Name', channelId: 1000, station: 'Station Name'},
    {compressorName: 'Name', channelId: 1000, station: 'Station Name'},
    {compressorName: 'Name', channelId: 1000, station: 'Station Name'},
    {compressorName: 'Name', channelId: 1000, station: 'Station Name'},
    {compressorName: 'Name', channelId: 1000, station: 'Station Name'},
    {compressorName: 'Name', channelId: 1000, station: 'Station Name'},
  ];

  dataSource = new MatTableDataSource(this.REQUESTS);
  columnsToDisplay = ['compressorName', 'channelId', 'station', 'state'];
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
    const DialogRef = this._dialog.open(CompressorFormComponent);
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
    const DialogRef = this._dialog.open(CompressorFormComponent, {
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

  getStateColor(compressorName: any) {
  switch (compressorName) {
    case 'Name':
      return 'orange-svg';
    default:
      return 'unknown-svg';
  }
}

}
