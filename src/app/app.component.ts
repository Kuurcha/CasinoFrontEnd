import { Component } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title: string;
   entityForm: FormGroup;
   radioButtonValue!: string;
   errorMessage: string;
  constructor() {
    this.errorMessage = "";
    this.title = 'Test!';
    this.entityForm = new FormGroup({
      entityName: new FormControl('Company', Validators.required),
    });
    this.radioButtonValue = 'Company';
  }
  onFormSubmit(){
    this.radioButtonValue = 'Company';
  }

  changeEntity(e: any) {
    console.log(e.target.value);
    this.radioButtonValue = e.target.value;
  }

}
