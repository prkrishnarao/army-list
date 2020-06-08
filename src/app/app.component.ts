import { Component, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';

export interface ArmyUnit {
  name: string;
  pointValue: number;
  owned: boolean;
  dateAdded: Date;
}

const ELEMENT_DATA: ArmyUnit[] = [
];

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})

export class AppComponent {
  inputForm = new FormGroup({
    name: new FormControl(''),
    pointValue: new FormControl(''),
    owned: new FormControl(''),
    dateAdded: new FormControl('')
  });
  displayedColumns: string[] = ['name', 'pointValue', 'owned', 'dateAdded'];
  dataSource = ELEMENT_DATA;

  onSubmit() {
    this.dataSource = this.dataSource.concat(this.inputForm.value);
    this.inputForm.reset();
  }  
}