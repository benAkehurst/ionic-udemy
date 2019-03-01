import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-persons-import',
  templateUrl: './persons-input.component.html',
  styleUrls: ['./persons-input.component.scss']
})
export class PersonsImportComponent implements OnInit {

  @Output() personCreate = new EventEmitter<string>();
  public enteredPersonName = '';

  constructor() {}

  ngOnInit() {}

  /**
   * Passing a value as a refrence function

  public onCreateUser(personName: string) {
    console.log('Created a person: ' + personName);
  }
  */

  /**
   * Two way binding
  */
  public onCreateUser() {
    console.log(this.enteredPersonName);
    this.personCreate.emit(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
