import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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

  public save(slotMachine: SlotMachine) {
    return this.http.post<SlotMachine>(this.slotMachineUrl, slotMachine);
  }
}
