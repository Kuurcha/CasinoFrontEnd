import { Component, OnInit } from '@angular/core';
import {Company} from "../../../../model/company";
import {ActivatedRoute, Router} from "@angular/router";
import {CompanyServiceService} from "../../../../service/company-service.service";
import {SlotMachine} from "../../../../model/slot-machine";
import {SlotMachineService} from "../../../../service/slot-machine.service";
import {goToPath} from "../../../myFunctions";
import {DerivedFromCasinoBuilding} from "../../../../parents/derivedFromCasinoBuilding";
import {WorkerService} from "../../../../service/worker.service";
import {CasinoBuildingService} from "../../../../service/casino-building.service";
import {Worker} from "../../../../model/worker";
import {CasinoBuilding} from "../../../../model/casino-building";

@Component({
  selector: 'app-slot-machine-form',
  templateUrl: './slot-machine-form.component.html',
  styleUrls: ['./slot-machine-form.component.css']
})
export class SlotMachineFormComponent extends DerivedFromCasinoBuilding {
  slotMachine!: SlotMachine
  constructor(    protected route: ActivatedRoute,
                  protected router: Router,
                  protected slotMachineService: SlotMachineService,
                  protected casinoService: CasinoBuildingService

  ){

    super(route, router, casinoService)
    this.slotMachine = new SlotMachine();
    if (this.slotMachineService.editMode){
      let buffer = this.slotMachineService.buffer;
      this.slotMachine.id = buffer.id;
      this.slotMachine.slotNumber = buffer.slotNumber;
      this.slotMachine.gameName = buffer.gameName;
      this.slotMachine.paymentDispersion = buffer.paymentDispersion;
      this.slotMachine.cashRemains = buffer.cashRemains;
      this.slotMachine.fk_casino_id = buffer.fk_casino_id;
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
    if (this.slotMachineService.editMode){
      this.getIdByAdress(this.casinoAdress).then( () => {
        this.slotMachine.fk_casino_id = this.casinoId
      });
      console.log(this.casinoId)
      console.log(this.slotMachine)
      this.slotMachineService.put(this.slotMachine.id, this.slotMachine).subscribe(result =>{
        this.slotMachineService.editMode = false;
        goToPath("/Slot Machine", this.router);
      });


    }
    else {
      this.getIdByAdress(this.casinoAdress).then((resolve:any) => {
        this.slotMachine.fk_casino_id = this.casinoId
        console.log(this.casinoId)
        console.log(this.slotMachine)
        this.slotMachineService.save(this.slotMachine).subscribe(result => goToPath("/Slot Machine", this.router));
      })
    }



  }

  onDropDownClick(){
    this.updateDropDownCall();
  }

}
