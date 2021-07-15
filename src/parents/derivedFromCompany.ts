import {Component, OnInit} from "@angular/core";
import {Worker} from "../model/worker";
import {CasinoBuilding} from "../model/casino-building";
import {ActivatedRoute, Router} from "@angular/router";
import {WorkerService} from "../service/worker.service";
import {CasinoBuildingService} from "../service/casino-building.service";
import {Company} from "../model/company";
import {CompanyServiceService} from "../service/company-service.service";
@Component({
  template: ''
})
export abstract class DerivedFromCompany implements OnInit{


  protected  companies!: Company[];
  public companyNames!: string[];
  protected companyId!: string;
  public companyName!: string;

  protected constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected companyService: CompanyServiceService) {
  }
  showList(){
    return  new Promise((resolve, reject) => {
      console.log("showList");
      this.companyService.findAll().subscribe((data) => {
        this.companies = data;
        console.log(data);
        resolve("Ok!");
      });
      console.log("showList end");

    });
  }
  updateDropDown(){
    return new Promise((resolve)  => {
      this.companyNames = [];
      let arrayLength = this.companies.length;
      for (let i = 0; i < this.companies.length; i++) {
        this.companyNames.push(this.companies[i].companyName);
        console.log(this.companyNames);
      }
      resolve("Ok!");
    })
  }
  getIdByAdress(companyName: string) {
    return new Promise((resolve)  => {
      if (Array.isArray(this.companies)) {
        for (let i = 0; i < this.companies.length; i++) {
          let elem = this.companies[i];
          console.log("desired companyName " + companyName + " current adress " + elem.companyName)

          if (elem.companyName === companyName) {
            this.companyId = String(elem.id);
            break;
          }
        }
      }
      resolve("Ok!")
    })
  }

  ngOnInit(): void {
  }
}
