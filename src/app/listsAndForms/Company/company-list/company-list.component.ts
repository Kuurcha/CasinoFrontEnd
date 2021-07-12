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

  ngOnInit() {
    this.companyService.findAll().subscribe((data) => {
      this.companies = data;
    });
  }


}
