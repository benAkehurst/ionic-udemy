import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PersonsService {

  public personsChanged = new Subject<string[]>();
  // public persons: string[] = ['Ben', 'Matt', 'Lauren'];
  public persons: string[];

  constructor(private http: HttpClient) {}

  public fetchPersons() {
    this.http.get<any>('https://swapi.co/api/people')
    .pipe(map(resData => {
      return resData.results.map(charater => charater.name);
    })
    )
    .subscribe(transformedData => {
      this.personsChanged.next(transformedData);
    });
  }

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
