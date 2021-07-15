import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import {Company} from "../model/company";
import {SlotMachine} from "../model/slot-machine";

@Injectable()
export class CompanyServiceService {

  private companyUrl: string;

  constructor(private http: HttpClient) {
    this.companyUrl = 'http://localhost:5433/Company';
  }

  public findAll(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companyUrl);
  }

  public save(company: Company) {
    return this.http.post<Company>(this.companyUrl, company);
  }
}

