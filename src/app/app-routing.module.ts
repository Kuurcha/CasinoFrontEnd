import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './listsAndForms/Company/company-list/company-list.component';
import { CompanyFormComponent } from './listsAndForms/Company/company-form/company-form.component';
import {CommonModule} from "@angular/common";
import {CasinoBuidlingListComponent} from "./listsAndForms/casino-building/casino-buidling-list/casino-buidling-list.component";
import {WorkerListComponent} from "./listsAndForms/worker/worker-list/worker-list.component";
import {WorkerFormComponent} from "./listsAndForms/worker/worker-form/worker-form.component";
import {SlotMachineFormComponent} from "./listsAndForms/slot-machine/slot-machine-form/slot-machine-form.component";
import {SlotMachineListComponent} from "./listsAndForms/slot-machine/slot-machine-list/slot-machine-list.component";

const routes: Routes = [
  { path: 'company', component: CompanyListComponent },
  { path: 'companyAdd', component: CompanyFormComponent },
  { path: 'casinoBuilding', component: CasinoBuidlingListComponent},
  { path: 'casinoBuildingAdd', component: CasinoBuidlingListComponent},
  { path: 'worker', component: WorkerListComponent},
  { path: 'workerAdd', component: WorkerFormComponent},
  { path: 'slotMachine', component: SlotMachineListComponent},
  { path: 'slotMachineAdd', component: SlotMachineFormComponent}
];

@NgModule({
  declarations: [],
  imports: [ CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
