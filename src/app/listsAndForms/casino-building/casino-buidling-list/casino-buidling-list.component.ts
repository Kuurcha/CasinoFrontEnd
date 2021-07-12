import { Component, OnInit } from '@angular/core';
import {CasinoBuilding} from "../../../../model/casino-building";
import {CasinoBuildingService} from "../../../../service/casino-building.service";

@Component({
  selector: 'app-casino-buidling-list',
  templateUrl: './casino-buidling-list.component.html',
  styleUrls: ['./casino-buidling-list.component.css']
})
export class CasinoBuidlingListComponent implements OnInit {

  casinoBuildings!: CasinoBuilding[];

  constructor(private companyService: CasinoBuildingService) {
  }

  ngOnInit() {
    this.companyService.findAll().subscribe((data) => {
      this.casinoBuildings = data;
    });
  }

}
