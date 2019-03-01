import { Component, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {

  personList: string[];

  constructor(
    private ps: PersonsService
  ) { }

  ngOnInit() {
    this.personList = this.ps.persons;
  }

}
