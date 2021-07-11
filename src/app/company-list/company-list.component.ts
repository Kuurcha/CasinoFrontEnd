import { Component, OnInit } from '@angular/core';
import { Company } from '../../model/Company';
import { CompanyServiceService} from '../../service/company-service.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies: Company[] | undefined;

  constructor(private companyService: CompanyServiceService) {
  }

  ngOnInit() {
    this.companyService.findAll().subscribe((data: Company[]) => {
      this.companies = data;
    });
  }


}
