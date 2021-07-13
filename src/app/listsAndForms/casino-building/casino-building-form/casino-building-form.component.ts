import { Component, OnInit } from '@angular/core';
import {Company} from "../../../../model/company";
import {ActivatedRoute, Router} from "@angular/router";
import {CompanyServiceService} from "../../../../service/company-service.service";
import {CasinoBuilding} from "../../../../model/casino-building";
import {CasinoBuildingService} from "../../../../service/casino-building.service";

@Component({
  selector: 'app-casino-building-form',
  templateUrl: './casino-building-form.component.html',
  styleUrls: ['./casino-building-form.component.css']
})
export class CasinoBuildingFormComponent implements OnInit {

  casinoBuilding: CasinoBuilding
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private casinoBuildingService: CasinoBuildingService) {
    this.casinoBuilding = new CasinoBuilding();
  }
  onSubmit() {
    console.log(this.casinoBuilding.adress);
    console.log('on sumbit triggered');
    this.casinoBuildingService.save(this.casinoBuilding).subscribe(result => this.gotoList());
    console.log('on sumbit triggered');
  }

  gotoList() {
    console.log('go to list triggered');
    this.router.navigate(['/Casino Building']);
    console.log('go to list triggered');
  }

  ngOnInit(): void {
  }


}
