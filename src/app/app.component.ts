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
   hiddenButton: boolean = true;

  changeEntity(e: any) {
    console.log(e.target.value);
    this.radioButtonValue = e.target.value;
    this.errorMessage = " ";
    this.changeVisibility();

  }
  constructor(
  ) {
    this.title = 'Test!';
    this.entityForm = new FormGroup({
      entityName: new FormControl('', Validators.required),
    });
  }
  onFormSubmit(){

  }

  ngOnInit(): void {


  }

  changeVisibility(){
    if (this.radioButtonValue != ""){
      this.hiddenButton = false;
    }
    else {
      this.hiddenButton = true;
    }
    console.log(this.radioButtonValue + "  " + this.hiddenButton)
  }
  onClickMe() {
    console.log("button clicked")

  }

  ngOnDestroy(): void {
  }
}
