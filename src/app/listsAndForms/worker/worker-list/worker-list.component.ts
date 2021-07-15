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

  goList(){
    this.workerService.findAll().subscribe((data) => {
      this.workers = data;
    });
  }
  ngOnInit() {
   this.goList();
  }
  delete($event: MouseEvent) {
    let elementId: string = (($event.target as Element).id).substr(1);
    console.log(elementId);
    this.workerService.deleteById(elementId).then((resolve:any) =>{
      this.goList();
    })
  }
  update($event: MouseEvent) {

  }


}
