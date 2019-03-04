import { Component, OnInit } from '@angular/core';
import { RecepiesService } from './recepies.service';
import { Recepie } from './recepie.model';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.page.html',
  styleUrls: ['./recepies.page.scss'],
})
export class RecepiesPage implements OnInit {

  public recepies: Recepie[];

  constructor(private recepiesService: RecepiesService) { }

  ngOnInit() {
    this.recepies = this.recepiesService.getAllRecepies();
  }

}
