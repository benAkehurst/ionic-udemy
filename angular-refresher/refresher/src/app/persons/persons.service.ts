import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PersonsService {
  public persons: string[] = ['Ben', 'Matt', 'Lauren'];

  public addPerson(name: string) {
    this.persons.push(name);
  }
}
