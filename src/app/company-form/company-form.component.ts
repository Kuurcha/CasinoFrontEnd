import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../../model/Company';
import { CompanyServiceService} from '../../service/company-service.service';
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
    this.router.navigate(['/companies']);
  }

  ngOnInit(): void {
  }

}
