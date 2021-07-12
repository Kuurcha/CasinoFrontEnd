import { Component, OnInit } from '@angular/core';
import {SlotMachine} from "../../../../model/slot-machine";
import {SlotMachineService} from "../../../../service/slot-machine.service";

@Component({
  selector: 'app-slot-machine-list',
  templateUrl: './slot-machine-list.component.html',
  styleUrls: ['./slot-machine-list.component.css']
})
export class SlotMachineListComponent implements OnInit {

  slotMachines!: SlotMachine[];

  constructor(private slotMachineService: SlotMachineService) {
  }

  ngOnInit() {
    this.slotMachineService.findAll().subscribe((data) => {
      this.slotMachines = data;
    });
  }

}
