import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonsComponent } from './persons/persons.component';
import { PersonsImportComponent } from './persons/person-input.component';

const routes: Routes = [
  { path: '', component: PersonsComponent },
  { path: 'input', component: PersonsImportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
