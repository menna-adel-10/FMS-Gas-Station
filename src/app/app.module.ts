import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MachinesComponent } from './pages/machines/machines.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';

import { DispenserComponent } from './pages/machines/dispenser/dispenser.component';
import { CompressorComponent } from './pages/machines/compressor/compressor.component';
import { NozzleComponent } from './pages/machines/nozzle/nozzle.component';
import { MatTableModule } from '@angular/material/table';
import { StationsComponent } from './pages/machines/stations/stations.component';
import { MapViewComponent } from './pages/control/map-view/map-view.component';
import { LastViewComponent } from './pages/control/last-view/last-view.component';
import { AddEditComponent } from './pages/machines/add-edit/add-edit.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import { MapModule } from '@progress/kendo-angular-map';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { ChartsModule } from "@progress/kendo-angular-charts";
import 'hammerjs';
import { AlertNavComponent } from './components/alert-nav/alert-nav/alert-nav.component';
import { IntlModule } from "@progress/kendo-angular-intl";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { FormFieldModule } from "@progress/kendo-angular-inputs";
import { IconsModule } from "@progress/kendo-angular-icons";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TabsNavComponent } from './components/tabs-nav/tabs-nav.component';
import { ControlComponent } from './pages/control/control.component';
import {RoundProgressModule,ROUND_PROGRESS_DEFAULTS} from 'angular-svg-round-progressbar';
import { SortableModule } from "@progress/kendo-angular-sortable";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NozzleFormComponent } from './pages/machines/nozzle/nozzle-form/nozzle-form.component';
import { DispenserFormComponent } from './pages/machines/dispenser/dispenser-form/dispenser-form.component';
import { CompressorFormComponent } from './pages/machines/compressor/compressor-form/compressor-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MainComponent,
    DashboardComponent,
    MachinesComponent,
    PlanningComponent,
    NavbarComponent,
    DispenserComponent,
    CompressorComponent,
    NozzleComponent,
    StationsComponent,
    MapViewComponent,
    LastViewComponent,
    AddEditComponent,
    AlertNavComponent,
    TabsNavComponent,
    ControlComponent,
    NozzleFormComponent,
    DispenserFormComponent,
    CompressorFormComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    CdkMenuModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTabsModule,
    MapModule,
    ButtonsModule,
    InputsModule,
    ChartsModule,
    LabelModule,
    IntlModule,
    DateInputsModule,
    FormFieldModule,
    IconsModule,
    DropDownsModule,
    LayoutModule,
    RoundProgressModule,
    SortableModule,
    MatProgressBarModule,
    NgCircleProgressModule.forRoot({ "radius": 60,
      "space": -10,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#FF7F5C",

      "innerStrokeColor": "#F4DBD4",
      "innerStrokeWidth": 10,
      "percent": 85,
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": true,
      "startFromZero": false,
      "lazy": true})

  ],
   providers: [{
    provide: ROUND_PROGRESS_DEFAULTS,
    useValue: {
      color: '#F7B801',
      background: '#E0E7F1'
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
