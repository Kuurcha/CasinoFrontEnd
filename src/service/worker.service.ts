import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Worker} from "../model/worker";
import {SlotMachine} from "../model/slot-machine";

@Injectable({
  providedIn: 'root'
})
export class WorkerService implements OnInit{

  private workerUrl: string;

  constructor(private http: HttpClient) {
    this.workerUrl= 'http://localhost:5433/Worker';
  }

  public findAll(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.workerUrl);
  }
  public deleteById(id: String){
    return new Promise((resolve)  => {
      let path = this.workerUrl + "/" + id;
      console.log("delete request: " + path)
      let temp = this.http.delete<SlotMachine>(path).subscribe(() =>{
          console.log("result1 " + temp)
          resolve(temp)
        }
      );
    });
  }
  public save(worker: Worker) {
    return this.http.post<Worker>(this.workerUrl, worker);
  }

  ngOnInit(): void {
  }
}
