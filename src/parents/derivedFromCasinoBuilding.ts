import {Component, OnInit} from "@angular/core";
import {Worker} from "../model/worker";
import {CasinoBuilding} from "../model/casino-building";
import {ActivatedRoute, Router} from "@angular/router";
import {WorkerService} from "../service/worker.service";
import {CasinoBuildingService} from "../service/casino-building.service";
@Component({
  template: ''
})
export abstract class DerivedFromCasinoBuilding implements OnInit{


  protected  casinoBuildings!: CasinoBuilding[];
  public casinoAdresses!: string[];
  protected casinoId!: string;
  public casinoAdress!: string;

  protected constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected casinoService: CasinoBuildingService) {
  }
  showList(){
    return  new Promise((resolve, reject) => {
      console.log("showList");
      this.casinoService.findAll().subscribe((data) => {
        this.casinoBuildings = data;
        console.log(data);
        resolve("Ok!");
      });
      console.log("showList end");

    });
  }
  updateDropDown(){
    return new Promise((resolve)  => {
      console.log("updateDropDown")
      this.casinoAdresses = [];
      let arrayLength = this.casinoBuildings.length;
      for (let i = 0; i < this.casinoBuildings.length; i++) {
        this.casinoAdresses.push(this.casinoBuildings[i].adress);
      }
      resolve("Ok!");
    })
  }
  getIdByAdress(adress: string) {
    return new Promise((resolve)  => {
      if (Array.isArray(this.casinoBuildings)) {
        for (let i = 0; i < this.casinoBuildings.length; i++) {
          let elem = this.casinoBuildings[i];
          console.log("desired adress " + adress + " current adress " + elem.adress)

          if (elem.adress === adress) {
            this.casinoId = String(elem.id);
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
