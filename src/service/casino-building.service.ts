import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CasinoBuilding} from "../model/casino-building";

@Injectable({
  providedIn: 'root'
})
export class CasinoBuildingService {


  private casinoBuildingUrl: string;

  constructor(private http: HttpClient) {
    this.casinoBuildingUrl= 'http://localhost:5433/Worker';
  }

  public findAll(): Observable<CasinoBuilding[]> {
    return this.http.get<CasinoBuilding[]>(this.casinoBuildingUrl);
  }

  public save(casinoBuilding: CasinoBuilding) {
    return this.http.post<CasinoBuilding>(this.casinoBuildingUrl, casinoBuilding);
  }
}
