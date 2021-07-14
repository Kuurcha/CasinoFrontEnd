import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {Worker} from "../../../../model/worker";
import {WorkerService} from "../../../../service/worker.service";
import {CasinoBuilding} from "../../../../model/casino-building";
import {CasinoBuildingService} from "../../../../service/casino-building.service";
//npm install --save @angular/material
import {MatSelectModule} from "@angular/material/select"
import {goToPath} from "../../../myFunctions";

@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.css']
})
export class WorkerFormComponent implements OnInit {

  worker!: Worker
  casinoBuildings!: CasinoBuilding[];
  casinoAdresses!: string[];
  casinoId!: string;
  casinoAdress!: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private workerService: WorkerService,
    private casinoService: CasinoBuildingService) {
    this.worker = new Worker();
  }

  public updateDropDownCall (){
      this.showList().then((resolve:any) =>{
        this.updateDropDown().then((resolve:any) => {
        })
      })
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
  onSubmit() {
      console.log("onSumbit: " + this.casinoAdress)
    this.getIdByAdress(this.casinoAdress).then((resolve:any) => {
      this.worker.fk_casino_id = this.casinoId
        console.log(this.casinoId)
        console.log(this.worker)
        this.workerService.save(this.worker).subscribe(result => goToPath("/Worker", this.router));
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



  onDropDownClick(){
  this.updateDropDownCall();
  }


  ngOnInit(): void {

  }
}
