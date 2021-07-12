import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Worker} from "../model/worker";

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  private workerUrl: string;

  constructor(private http: HttpClient) {
    this.workerUrl= 'http://localhost:5433/Worker';
  }

  public findAll(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.workerUrl);
  }

  public save(worker: Worker) {
    return this.http.post<Worker>(this.workerUrl, worker);
  }
}
