import { Component, OnInit } from '@angular/core';
import {CasinoBuilding} from "../../../../model/casino-building";
import {CasinoBuildingService} from "../../../../service/casino-building.service";
import {goToPath} from "../../../myFunctions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-casino-buidling-list',
  templateUrl: './casino-buidling-list.component.html',
  styleUrls: ['./casino-buidling-list.component.css']
})
export class CasinoBuidlingListComponent implements OnInit {

  casinoBuildings!: CasinoBuilding[];

  constructor(private casinoService: CasinoBuildingService, private router: Router) {
  }

  goList(){
    this.casinoService.findAll().subscribe((data) => {
      this.casinoBuildings = data;
      console.log("data : " + data)
    });
  }

  ngOnInit() {
    this.goList();
  }

  update($event: MouseEvent) {

  }

  delete($event: MouseEvent) {
    let elementId: string = (($event.target as Element).id).substr(1);
    console.log(elementId);
    this.casinoService.deleteById(elementId).then((resolve:any) =>{
      console.log("afterDelete")
      if (this.casinoBuildings.length > 1){
        this.goList();
      }
      else {
        this.casinoBuildings = []
        goToPath("/Casino Building", this.router)
      }

    })
  }
}
