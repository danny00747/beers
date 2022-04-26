import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceComponent } from './place/place.component';
import { PlacesComponent } from './places.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PlacesComponent
  },
  {
    path: ':id',
    component: PlaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesRoutingModule { }
