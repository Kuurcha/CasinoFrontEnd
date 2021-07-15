import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SharedService} from "./shared/shared.service";
// import { InterceptorService } from "./services/interceptor.service"
import {HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})
export class AppComponent implements  OnInit{
   title: string;
   entityForm: FormGroup;
   radioButtonValue!: string;
   errorMessage!: String;


  changeEntity(e: any) {
    console.log(e.target.value);
    this.radioButtonValue = e.target.value;
    this.errorMessage = " ";
  }
  constructor(
  ) {

    this.title = 'Test!';
    this.entityForm = new FormGroup({
      entityName: new FormControl('Company', Validators.required),
    });
    this.radioButtonValue = 'Company';
  }
  onFormSubmit(){

  }

  ngOnInit(): void {


  }


  onClickMe() {

  }

  ngOnDestroy(): void {
  }
}
