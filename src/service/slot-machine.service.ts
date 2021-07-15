import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {SlotMachine} from "../model/slot-machine";

@Injectable({
  providedIn: 'root'
})
export class SlotMachineService {


  private slotMachineUrl: string;

  constructor(private http: HttpClient) {
    this.slotMachineUrl = 'http://localhost:5433/SlotMachine';
  }

  public findAll(): Observable<SlotMachine[]> {
    return this.http.get<SlotMachine[]>(this.slotMachineUrl);
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
