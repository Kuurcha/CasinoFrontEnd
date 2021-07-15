import { Component, OnInit } from '@angular/core';
import {Company} from "../../../../model/company";
import {ActivatedRoute, Router} from "@angular/router";
import {CompanyServiceService} from "../../../../service/company-service.service";
import {CasinoBuilding} from "../../../../model/casino-building";
import {CasinoBuildingService} from "../../../../service/casino-building.service";
import { DerivedFromCompany } from "../../../../parents/derivedFromCompany"
import {goToPath} from "../../../myFunctions";
import {SlotMachineService} from "../../../../service/slot-machine.service";
@Component({
  selector: 'app-casino-building-form',
  templateUrl: './casino-building-form.component.html',
  styleUrls: ['./casino-building-form.component.css']
})
export class CasinoBuildingFormComponent extends DerivedFromCompany {

  casinoBuilding: CasinoBuilding
  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected companyService: CompanyServiceService,
    protected casinoBuildingService: CasinoBuildingService) {
    super(route, router, companyService)
    this.casinoBuilding = new CasinoBuilding();
    if (this.casinoBuildingService.editMode)
    {
      let buffer = this.casinoBuildingService.buffer;
      this.casinoBuilding.id = buffer.id;
      this.casinoBuilding.buildingNumber = buffer.buildingNumber;
      this.casinoBuilding.adress = buffer.adress;
      this.casinoBuilding.fk_company_id = buffer.fk_company_id;
    }
  }

  public updateDropDownCall (){
    this.showList().then((resolve:any) =>{
      console.log("showList")
      this.updateDropDown().then((resolve:any) => {
        console.log(this.companyNames)
        console.log(this.companies)
      })
    })
  }

  onSubmit() {
    console.log("onSumbit: " + this.companyName)
    if (this.companyService.editMode){
      this.getIdByAdress(this.companyName).then( () => {
        this.casinoBuilding.fk_company_id = this.companyId
      });
      console.log(this.companyId)
      console.log(this.casinoBuilding)
      this.casinoBuildingService.put(this.casinoBuilding.id, this.casinoBuilding).subscribe(result =>{
        this.companyService.editMode = false;
        goToPath("/Casino Building", this.router);
      });


    }
    else {
      this.getIdByAdress(this.companyName).then((resolve:any) => {
        this.casinoBuilding.fk_company_id = this.companyId;
        console.log(this.companyId)
        console.log(this.casinoBuilding)
        this.casinoBuildingService.save(this.casinoBuilding).subscribe(result => goToPath("/Casino Building", this.router));
      })
    }
    console.log("onSumbit: " + this.companyName)


  }

  onDropDownClick(){
    this.updateDropDownCall();
  }


}
