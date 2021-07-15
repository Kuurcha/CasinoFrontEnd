import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Worker} from "../model/worker";
import {SlotMachine} from "../model/slot-machine";
import {Company} from "../model/company";

@Injectable({
  providedIn: 'root'
})
export class WorkerService implements OnInit{

  private workerUrl: string;
  public editMode:boolean = false;
  public buffer!: Worker;


  constructor(private http: HttpClient) {
    this.workerUrl= 'http://localhost:5433/Worker';
  }
  public put(id: bigint, worker: Worker){
    let path = this.workerUrl+ "/" + id
    console.log("put request" + path)
    let temp = this.http.put<Worker>(path, worker)
    return temp;
  }
  public findById(id: string): Observable<Worker>{
    return this.http.get<Worker>(this.workerUrl + "/" + id)
  }
  public findAll(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.workerUrl);
  }
  public deleteById(id: String){
    return new Promise((resolve)  => {
      let path = this.workerUrl + "/" + id;
      console.log("delete request: " + path)
      let temp = this.http.delete<Worker>(path).subscribe(() =>{
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
