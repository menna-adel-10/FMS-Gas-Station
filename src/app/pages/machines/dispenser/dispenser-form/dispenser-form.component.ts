import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/core/core.service';
import { StationNamesService } from 'src/app/services/station-names.service';

@Component({
  selector: 'app-dispenser-form',
  templateUrl: './dispenser-form.component.html',
  styleUrls: ['./dispenser-form.component.scss']
})
export class DispenserFormComponent implements OnInit {

  eForm: FormGroup;

  constructor(private _fb: FormBuilder,
              private _nService: StationNamesService,
    private _dialogRef: MatDialogRef<DispenserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService) {
    this.eForm = this._fb.group({
      stationName: new FormControl('', [Validators.required]),
      channelId: '',
      location: '',
      description: ''

    })
  }

  onFormSubmit() {
    if (this.eForm.valid) {
      if (this.data) {
         this._nService.updateStation(this.data.id, this.eForm.value).subscribe({
        next: (val: any) => {
          this._coreService.openSnackBar('Station Details Updated!')
          this._dialogRef.close(true);
        },
        error: (err: any) => {
          console.error(err);
        }
      })
      } else {
         this._nService.addStation(this.eForm.value).subscribe({
        next: (val: any) => {
             this._coreService.openSnackBar('Station Added Successfully')

          this._dialogRef.close(true);
        },
        error: (err: any) => {
          console.error(err);
        }
      })
      }

    }
  }

  ngOnInit(): void {
      this.eForm.patchValue(this.data)
  }
}



