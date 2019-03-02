import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PersonsService {

  public personsChanged = new Subject<string[]>();
  public persons: string[] = ['Ben', 'Matt', 'Lauren'];

  public addPerson(name: string) {
    this.persons.push(name);
    this.personsChanged.next(this.persons);
    console.log(this.persons);
  }

  public removePerson(name: string) {
    this.persons = this.persons.filter(person => {
      return person !== name;
    });
    this.personsChanged.next(this.persons);
  }
}
