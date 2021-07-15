import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {SlotMachine} from "../model/slot-machine";
import {CasinoBuilding} from "../model/casino-building";

@Injectable({
  providedIn: 'root'
})
export class SlotMachineService {

  public editMode:boolean = false;
  public slotMachineUrl: string;
  public buffer!: SlotMachine;
  constructor(private http: HttpClient) {
    this.slotMachineUrl = 'http://localhost:5433/SlotMachine';
  }
  public put(id: bigint, slotMachine: SlotMachine){
      let path = this.slotMachineUrl + "/" + id
      console.log("put request" + path)
      let temp = this.http.put<SlotMachine>(path, slotMachine)
      return temp;
  }
  public findAll(): Observable<SlotMachine[]> {
    return this.http.get<SlotMachine[]>(this.slotMachineUrl);
  }
  public findById(id: string): Observable<SlotMachine>{
    return this.http.get<SlotMachine>(this.slotMachineUrl + "/" + id)
  }
  public deleteById(id: String){
    return new Promise((resolve)  => {
      let path = this.slotMachineUrl + "/" + id;
      console.log("delete request: " + path)
      let temp = this.http.delete<SlotMachine>(path).subscribe(() =>{
          console.log("result1 " + temp)
          resolve(temp)
      }
      );
    });
  }

  public save(slotMachine: SlotMachine) {
    return this.http.post<SlotMachine>(this.slotMachineUrl, slotMachine);
  }
}
