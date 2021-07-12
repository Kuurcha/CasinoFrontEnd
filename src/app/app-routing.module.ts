import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import {CommonModule} from "@angular/common";

const routes: Routes = [
  { path: 'company', component: CompanyListComponent },
  { path: 'addCompany', component: CompanyFormComponent }
];

@NgModule({
  declarations: [],
  imports: [ CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
