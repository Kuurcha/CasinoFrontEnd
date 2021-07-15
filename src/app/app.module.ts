
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Observable } from 'rxjs';
import { CompanyFormComponent} from "./listsAndForms/Company/company-form/company-form.component";
import { CompanyListComponent} from "./listsAndForms/Company/company-list/company-list.component";
import { CompanyServiceService} from "../service/company-service.service";

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { CasinoBuidlingListComponent } from './listsAndForms/casino-building/casino-buidling-list/casino-buidling-list.component';
import { WorkerListComponent } from './listsAndForms/worker/worker-list/worker-list.component';
import { SlotMachineListComponent } from './listsAndForms/slot-machine/slot-machine-list/slot-machine-list.component';
import { SlotMachineFormComponent } from './listsAndForms/slot-machine/slot-machine-form/slot-machine-form.component';
import { WorkerFormComponent } from './listsAndForms/worker/worker-form/worker-form.component';
import { CasinoBuildingFormComponent } from './listsAndForms/casino-building/casino-building-form/casino-building-form.component'
// import { InterceptorService } from './services/interceptor.service';
import { SharedService} from "./shared/shared.service";
import {InterceptorService} from "./services/interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyFormComponent,
    CasinoBuidlingListComponent,
    WorkerListComponent,
    SlotMachineListComponent,
    SlotMachineFormComponent,
    WorkerFormComponent,
    CasinoBuildingFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    CompanyServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
