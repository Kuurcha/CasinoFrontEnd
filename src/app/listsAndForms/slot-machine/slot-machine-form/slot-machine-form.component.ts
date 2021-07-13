import { Component, OnInit } from '@angular/core';
import {Company} from "../../../../model/company";
import {ActivatedRoute, Router} from "@angular/router";
import {CompanyServiceService} from "../../../../service/company-service.service";
import {SlotMachine} from "../../../../model/slot-machine";
import {SlotMachineService} from "../../../../service/slot-machine.service";

@Component({
  selector: 'app-slot-machine-form',
  templateUrl: './slot-machine-form.component.html',
  styleUrls: ['./slot-machine-form.component.css']
})
export class SlotMachineFormComponent implements OnInit {
  slotMachine: SlotMachine
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private slotMachineService: SlotMachineService) {
    this.slotMachine = new SlotMachine();
  }
  onSubmit() {
    this.slotMachineService.save(this.slotMachine).subscribe(result => this.gotoList());
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/Slot Machine']);
    console.log('go to list triggered');
  }

  ngOnInit(): void {
  }

}
