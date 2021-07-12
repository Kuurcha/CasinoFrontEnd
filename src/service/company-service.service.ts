import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import {Company} from "../model/company";

@Injectable()
export class CompanyServiceService {

  private companyUrl: string;

  constructor(private http: HttpClient) {
    this.companyUrl = 'http://localhost:5433/Company';
  }

  public findAll(): Observable<any> {
    return this.http.get(this.companyUrl);
  }

  public save(company: Company) {
    return this.http.post<Company>(this.companyUrl, company);
  }
}

