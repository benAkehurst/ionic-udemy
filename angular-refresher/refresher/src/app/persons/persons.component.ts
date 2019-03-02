import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit, OnDestroy {
  public personList: string[];
  private personListSubs: Subscription;

  constructor(private ps: PersonsService) {}

  ngOnInit() {
    this.personList = this.ps.persons;
    this.personListSubs = this.ps.personsChanged.subscribe(persons => {
      this.personList = persons;
    });
  }

  ngOnDestroy() {
    this.personListSubs.unsubscribe();
  }

  public onPersonRemove(name: string) {
    this.ps.removePerson(name);
  }
}
