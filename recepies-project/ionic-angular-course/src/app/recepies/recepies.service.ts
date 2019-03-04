import { Injectable } from '@angular/core';

import { Recepie } from './recepie.model';

@Injectable({
  providedIn: 'root'
})
export class RecepiesService {

  private recepies: Recepie[] = [
    {
      id: 'r1',
      title: 'Shnitzel',
      imageUrl: 'https://thestayathomechef.com/wp-content/uploads/2018/03/German-Schnitzel-3-small.jpg',
      ingredients: ['Pork Meat', 'Breading', 'French Fries']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2018/07/spaghetti_collection_main_image.jpg',
      ingredients: ['Meat Sauce', 'Spaghetti']
    }
  ];

  constructor() { }

  public getAllRecepies() {
    return [...this.recepies];
  }

  public getRecepie(recepieId: string) {
    return {...this.recepies.find(recepie => {
      return recepie.id === recepieId;
    })};
  }

  public deleteRecepie(recepieId: string) {
    this.recepies = this.recepies.filter(recepie => {
      return recepie.id !== recepieId;
    });
  }
}
