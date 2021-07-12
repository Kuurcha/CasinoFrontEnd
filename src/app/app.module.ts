
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import { Observable } from 'rxjs';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyServiceService} from "../service/company-service.service";

import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyFormComponent
  ],
    imports: [
      BrowserModule,
      RouterModule,
      HttpClientModule,
      FormsModule,
      AppRoutingModule
    ],
  providers: [CompanyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
