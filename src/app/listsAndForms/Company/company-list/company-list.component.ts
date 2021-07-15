import { Component, OnInit } from '@angular/core';

import { CompanyServiceService} from '../../../../service/company-service.service';
import { Observable } from 'rxjs';
import {Company} from "../../../../model/company";
import {goToPath} from "../../../myFunctions";
import {Router} from "@angular/router";
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies!: Company[];

  constructor(private companyService: CompanyServiceService, private router: Router) {
  }

  goList(){
    this.companyService.findAll().subscribe((data) => {
      this.companies = data;
    });
  }

  ngOnInit() {
    this.goList();
  }


  update($event: MouseEvent) {
      let elementId: string = (($event.target as Element).id).substr(1);
      let original = this.companyService.findById(elementId).subscribe((data) => {
        this.companyService.buffer = data;
        this.companyService.editMode = true;
        goToPath("/Company Add", this.router)
      });
    }


    delete($event: MouseEvent) {
    let elementId: string = (($event.target as Element).id).substr(1);
    console.log(elementId);
    this.companyService.deleteById(elementId).then((resolve:any) =>{
      if (this.companies.length > 1){
        this.goList();
      }
      else
      {
        this.companies = []
        goToPath("/Company", this.router)
      }

    })
  }
}
