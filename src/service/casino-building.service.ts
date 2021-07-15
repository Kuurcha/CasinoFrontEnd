import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CasinoBuilding} from "../model/casino-building";
import {SlotMachine} from "../model/slot-machine";

@Injectable({
  providedIn: 'root'
})
export class CasinoBuildingService {


  private casinoBuildingUrl: string;

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
  public save(casinoBuilding: CasinoBuilding) {
    return this.http.post<CasinoBuilding>(this.casinoBuildingUrl, casinoBuilding);
  }
}
