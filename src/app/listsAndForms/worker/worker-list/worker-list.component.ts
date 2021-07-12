import { Component, OnInit } from '@angular/core';
import {SlotMachine} from "../../../../model/slot-machine";
import {SlotMachineService} from "../../../../service/slot-machine.service";
import { Worker } from "../../../../model/worker"
import {WorkerService} from "../../../../service/worker.service";
@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent implements OnInit {

  workers!: Worker[];

  constructor(private workerService: WorkerService) {
  }

  ngOnInit() {
    this.workerService.findAll().subscribe((data) => {
      this.workers = data;
    });
  }

}
