import { Component, OnInit } from '@angular/core';
import {SlotMachine} from "../../../../model/slot-machine";
import {SlotMachineService} from "../../../../service/slot-machine.service";
import { Worker } from "../../../../model/worker"
import {WorkerService} from "../../../../service/worker.service";
import {goToPath} from "../../../myFunctions";
import {Router} from "@angular/router";
@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent implements OnInit {

  workers!: Worker[];

  constructor(private workerService: WorkerService, private router: Router) {
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
      if (this.workers.length > 1){
        this.goList();
      }
      else {
        this.workers = []
        goToPath("/Worker", this.router)
      }
    })

  }
  update($event: MouseEvent) {
    let elementId: string = (($event.target as Element).id).substr(1);
    let original = this.workerService.findById(elementId).subscribe((data) => {
      console.log(elementId);
      this.workerService.buffer = data;

      console.log(data.fk_casino_id + this.workerService.buffer.fullName);
      this.workerService.editMode = true;
      goToPath("/Worker Add", this.router)
    });
  }


}
