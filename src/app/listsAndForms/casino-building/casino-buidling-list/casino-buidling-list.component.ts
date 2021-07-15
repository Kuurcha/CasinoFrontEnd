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

  constructor(private casinoService: CasinoBuildingService) {
  }

  goList(){
    this.casinoService.findAll().subscribe((data) => {
      this.casinoBuildings = data;
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
      this.goList();
    })
  }
}
