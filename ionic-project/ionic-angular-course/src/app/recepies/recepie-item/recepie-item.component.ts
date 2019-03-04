import { Component, OnInit, Input } from '@angular/core';

import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.scss'],
})
export class RecepieItemComponent implements OnInit {

  @Input() recepieItem: Recepie;

  constructor() { }

  ngOnInit() {}

}
