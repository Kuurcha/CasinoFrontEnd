import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import {Company} from "../model/company";
import {SlotMachine} from "../model/slot-machine";

@Injectable()
export class CompanyServiceService {

  public companyUrl: string;

  constructor(private http: HttpClient) {
    this.companyUrl = 'http://localhost:5433/Company';
  }

  public findAll(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companyUrl);
  }
  public deleteById(id: String){
    return new Promise((resolve)  => {
      let path = this.companyUrl + "/" + id;
      console.log("delete request: " + path)
      let temp = this.http.delete<SlotMachine>(path).subscribe(() =>{
          console.log("result1 " + temp)
          resolve(temp)
        }
      );
    });
  }

  public save(company: Company) {
    return this.http.post<Company>(this.companyUrl, company);
  }
}

