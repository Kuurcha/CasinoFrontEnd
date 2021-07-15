import { Component, OnInit } from '@angular/core';

import { CompanyServiceService} from '../../../../service/company-service.service';
import { Observable } from 'rxjs';
import {Company} from "../../../../model/company";
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies!: Company[];

  constructor(private companyService: CompanyServiceService) {
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

  }
  delete($event: MouseEvent) {
    let elementId: string = (($event.target as Element).id).substr(1);
    console.log(elementId);
    this.companyService.deleteById(elementId).then((resolve:any) =>{
      this.goList();
    })
  }
}
