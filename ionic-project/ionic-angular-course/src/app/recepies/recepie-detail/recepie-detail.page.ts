import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { RecepiesService } from '../recepies.service';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.page.html',
  styleUrls: ['./recepie-detail.page.scss'],
})
export class RecepieDetailPage implements OnInit {

  public loadedRecepie: Recepie;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recepiesService: RecepiesService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recepieId')) {
        this.router.navigate(['/recepies']);
        return;
      }
      const recepieId = paramMap.get('recepieId');
      this.loadedRecepie = this.recepiesService.getRecepie(recepieId);
    });
  }

  public onDeleteRecepie() {
    this.alertController.create({
      header: 'Are you sure...',
      message: 'Do you want to delete the recepie?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recepiesService.deleteRecepie(this.loadedRecepie.id);
            this.router.navigate(['/recepies']);
          }
        }
      ]
    }).then(alertElement => {
      alertElement.present();
    });
  }

}
