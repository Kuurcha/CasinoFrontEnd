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
    this.casinoBuildingService.save(this.casinoBuilding).subscribe(result => this.gotoList());
  }

  gotoList() {
    this.router.navigate(['/Сasino Building']);
  }

  ngOnInit(): void {
  }


}
