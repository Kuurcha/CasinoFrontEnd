import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {Worker} from "../../../../model/worker";
import {WorkerService} from "../../../../service/worker.service";
import {CasinoBuilding} from "../../../../model/casino-building";
import {CasinoBuildingService} from "../../../../service/casino-building.service";
//npm install --save @angular/material
import {MatSelectModule} from "@angular/material/select"
import {goToPath} from "../../../myFunctions";
import {DerivedFromCasinoBuilding} from "../../../../parents/derivedFromCasinoBuilding";

@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.css']
})
export class WorkerFormComponent extends DerivedFromCasinoBuilding   {

  worker!: Worker

  constructor(    protected route: ActivatedRoute,
                  protected router: Router,
                  protected workerService: WorkerService,
                  protected casinoService: CasinoBuildingService

  ){

    super(route, router, casinoService)
    this.worker = new Worker();
    if (this.workerService.editMode){
      let buffer = this.workerService.buffer;
      this.worker.id  = buffer.id;
      this.worker.occupation = buffer.occupation;
      this.worker.fullName = buffer.fullName;
      this.worker.dateOfBirth = buffer.dateOfBirth;
      this.worker.salary = buffer.salary;
    }
  }

  public updateDropDownCall (){
      this.showList().then((resolve:any) =>{
        this.updateDropDown().then((resolve:any) => {
        })
      })
  }
  onSubmit() {
    console.log("onSumbit: " + this.casinoAdress)
    if (this.workerService.editMode){
      this.getIdByAdress(this.casinoAdress).then( () => {
        this.worker.fk_casino_id = this.casinoId
      });
      console.log(this.casinoId)
      console.log(this.worker)
      this.workerService.put(this.worker.id, this.worker).subscribe(result =>{
        this.workerService.editMode = false;
        goToPath("/Worker", this.router);
      });


    }
    else {
      console.log("onSumbit: " + this.casinoAdress)
      this.getIdByAdress(this.casinoAdress).then((resolve:any) => {
        this.worker.fk_casino_id = this.casinoId
        console.log(this.casinoId)
        console.log(this.worker)
        this.workerService.save(this.worker).subscribe(result => goToPath("/Worker", this.router));
      })

    }

  }

  onDropDownClick(){
  this.updateDropDownCall();
  }
}
