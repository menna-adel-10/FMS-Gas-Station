import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MachinesComponent } from './pages/machines/machines.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { StationsComponent } from './pages/machines/stations/stations.component';
import { DispenserComponent } from './pages/machines/dispenser/dispenser.component';
import { CompressorComponent } from './pages/machines/compressor/compressor.component';
import { NozzleComponent } from './pages/machines/nozzle/nozzle.component';
import { MapViewComponent } from './pages/control/map-view/map-view.component';
import { LastViewComponent } from './pages/control/last-view/last-view.component';
import { ControlComponent } from './pages/control/control.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      {
    path: 'control', component: ControlComponent,
        children: [
    {path: '', redirectTo: 'last-view', pathMatch: 'full'},

      {path: 'map-view', component: MapViewComponent},
      {path: 'last-view', component: LastViewComponent},
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent,
 },
  {
    path: 'machines',
    component: MachinesComponent,
    children: [
    {path: '', redirectTo: 'stations', pathMatch: 'full'},
      {
        path: 'stations', component: StationsComponent
      },
      {
        path: 'dispenser', component: DispenserComponent
      },
      {
        path: 'compressor', component: CompressorComponent
      },
      {
        path: 'nozzle', component: NozzleComponent
      },

    ]
  },
  {path: 'planning', component: PlanningComponent},
  { path: 'logout', component: LogoutComponent },
   { path: '**', redirectTo: 'logout'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [
  ]
})
export class AppRoutingModule { }
