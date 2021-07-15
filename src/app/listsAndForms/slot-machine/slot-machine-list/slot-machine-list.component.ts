import { Component, OnInit } from '@angular/core';
import {SlotMachine} from "../../../../model/slot-machine";
import {SlotMachineService} from "../../../../service/slot-machine.service";
import {goToPath} from "../../../myFunctions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-slot-machine-list',
  templateUrl: './slot-machine-list.component.html',
  styleUrls: ['./slot-machine-list.component.css']
})
export class SlotMachineListComponent implements OnInit {

  slotMachines!: SlotMachine[];

  constructor(
    private slotMachineService: SlotMachineService,
    private router: Router
  ) {
  }

  goList(){
   return   this.slotMachineService.findAll().subscribe((data) => {
      this.slotMachines = data;
      goToPath("/Slot Machine", this.router);
    });
  }
  ngOnInit() {
  this.goList();
  }



  delete($event: MouseEvent) {
    let elementId: string = (($event.target as Element).id).substr(1);
    console.log(elementId);
    this.slotMachineService.deleteById(elementId).then((resolve:any) =>{
      if (this.slotMachines.length > 1){
        this.goList();
      }
      else {
        this.slotMachines = []
        goToPath("/Slot Machine", this.router)
      }
      this.goList();
    })

  }

  update($event: MouseEvent) {
    console.log();
  }



}
