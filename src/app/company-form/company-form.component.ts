import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CompanyServiceService} from '../../service/company-service.service';
import {Company} from "../../model/company";
@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {

  company: Company
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyService: CompanyServiceService) {
    this.company = new Company();
    }
  onSubmit() {
    this.companyService.save(this.company).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/company']);
  }

  ngOnInit(): void {
  }

}
