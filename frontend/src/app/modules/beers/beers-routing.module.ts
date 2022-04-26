import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeersComponent } from './beers.component';
import { BeerComponent } from './beer/beer.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BeersComponent
  },
  {
    path: ':id',
    component: BeerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeersRoutingModule { }
