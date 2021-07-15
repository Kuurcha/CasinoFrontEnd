import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CasinoBuilding} from "../model/casino-building";
import {SlotMachine} from "../model/slot-machine";
import {Worker} from "../model/worker";
import {Company} from "../model/company";

@Injectable({
  providedIn: 'root'
})
export class CasinoBuildingService {


  private casinoBuildingUrl: string;
  public editMode:boolean = false;
  public buffer!: CasinoBuilding;

  constructor(private http: HttpClient) {
    this.casinoBuildingUrl= 'http://localhost:5433/CasinoBuilding';
  }

  public findAll(): Observable<CasinoBuilding[]> {
    return this.http.get<CasinoBuilding[]>(this.casinoBuildingUrl);
  }
  public deleteById(id: String){
    return new Promise((resolve)  => {
      let path = this.casinoBuildingUrl + "/" + id;
      console.log("delete request: " + path)
      let temp = this.http.delete<SlotMachine>(path).subscribe(() =>{
          console.log("result1 " + temp)
          resolve(temp)
        }
      );
    });
  }
  public put(id: bigint, casino: CasinoBuilding){
    let path = this.casinoBuildingUrl + "/" + id
    console.log("put request" + path)
    let temp = this.http.put<CasinoBuilding>(path, casino)
    return temp;
  }
  public findById(id: string): Observable<CasinoBuilding>{
    return this.http.get<CasinoBuilding>(this.casinoBuildingUrl + "/" + id)
  }
  public save(casinoBuilding: CasinoBuilding) {
    return this.http.post<CasinoBuilding>(this.casinoBuildingUrl, casinoBuilding);
  }
}
