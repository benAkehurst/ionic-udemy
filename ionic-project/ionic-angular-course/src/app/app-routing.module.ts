import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'recepies', pathMatch: 'full' },
  {
    path: 'recepies',
    children: [
      {
        path: '',
        loadChildren: './recepies/recepies.module#RecepiesPageModule'
      },
      {
        path: ':recepieId',
        loadChildren: './recepies/recepie-detail/recepie-detail.module#RecepieDetailPageModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
