import { Component } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title: string;
   entityForm: FormGroup;
   radioButtonValue!: string;
  constructor() {
    this.title = 'Test!';
    this.entityForm = new FormGroup({
      entityName: new FormControl('Сompany', Validators.required),
    });
    this.radioButtonValue = 'Сompany';
  }
  onFormSubmit(){

  }

  changeEntity(e: any) {
    console.log(e.target.value);
    this.radioButtonValue = e.target.value;
  }

}
