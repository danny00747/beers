import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'beers',
    loadChildren: () => import('./modules/beers/beers.module').then(m => m.BeersModule)
  },
  {
    path: 'places',
    loadChildren: () => import('./modules/places/places.module').then(m => m.PlacesModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
