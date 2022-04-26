import { NgModule } from '@angular/core';
import { PlacesComponent } from './places.component';
import { PlaceComponent } from './place/place.component';
import { SharedModule } from '../../shared/shared.module';
import { PlacesRoutingModule } from './places-routing.module';
import { PlaceDialogComponent } from './place-dialog/place-dialog.component';
import {MatDialog} from "@angular/material/dialog";



@NgModule({
  declarations: [
    PlacesComponent,
    PlaceComponent,
    PlaceDialogComponent
  ],
  imports: [
    PlacesRoutingModule,
    SharedModule
  ],
  providers: [MatDialog]
})
export class PlacesModule { }
