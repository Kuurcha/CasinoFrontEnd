import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from '../model/Company';
import { Observable } from 'rxjs';

@Injectable()
export class CompanyServiceService {

  private companyUrl: string;

  constructor(private http: HttpClient) {
    this.companyUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companyUrl);
  }

  public save(company: Company) {
    return this.http.post<Company>(this.companyUrl, company);
  }
}

