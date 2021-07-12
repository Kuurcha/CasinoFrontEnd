import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {Worker} from "../../../../model/worker";
import {WorkerService} from "../../../../service/worker.service";

@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.css']
})
export class WorkerFormComponent implements OnInit {

  worker!: Worker
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private workerService: WorkerService) {
    this.worker = new Worker();
  }
  onSubmit() {
    this.workerService.save(this.worker).subscribe(result => this.gotoList());
  }

  gotoList() {
    this.router.navigate(['/worker']);
  }

  ngOnInit(): void {
  }
}
