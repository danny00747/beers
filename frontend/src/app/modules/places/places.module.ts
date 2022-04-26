import { NgModule } from '@angular/core';
import { PlacesComponent } from './places.component';
import { PlaceComponent } from './place/place.component';
import { SharedModule } from '../../shared/shared.module';
import { PlacesRoutingModule } from './places-routing.module';



@NgModule({
  declarations: [
    PlacesComponent,
    PlaceComponent
  ],
  imports: [
    PlacesRoutingModule,
    SharedModule
  ]
})
export class PlacesModule { }
