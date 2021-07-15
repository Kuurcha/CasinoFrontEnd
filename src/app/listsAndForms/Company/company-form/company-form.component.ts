import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CompanyServiceService} from '../../../../service/company-service.service';
import {Company} from "../../../../model/company";
import {goToPath} from "../../../myFunctions";
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
    if (this.companyService.editMode){
      let buffer = this.companyService.buffer;
      this.company.id = buffer.id;
      this.company.companyName = buffer.companyName;
      this.company.ceo = buffer.ceo;
      this.company.sharePrice = buffer.sharePrice;
    }
    }
  onSubmit() {
    console.log("onSumbit: " + this.company)
    if (this.companyService.editMode){
      this.companyService.put(this.company.id, this.company).subscribe(result =>{
          this.companyService.editMode = false;
        goToPath("/Company", this.router);
      });
    }
    else
        this.companyService.save(this.company).subscribe(result => this.gotoList());
  }

  gotoList() {
    this.router.navigate(['/Company']);
    console.log('go to list triggered');
  }

  ngOnInit(): void {
  }

}
