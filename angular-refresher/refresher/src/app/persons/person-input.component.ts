import { Component, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons-import',
  templateUrl: './persons-input.component.html',
  styleUrls: ['./persons-input.component.scss']
})
export class PersonsImportComponent implements OnInit {
  public enteredPersonName = '';

  constructor( private ps: PersonsService) {}

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
  //   console.log(this.enteredPersonName);
  //   this.personCreate.emit(this.enteredPersonName);
  //   this.enteredPersonName = '';

  this.ps.addPerson(this.enteredPersonName);
  }
}
