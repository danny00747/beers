import { NgModule } from '@angular/core';
import { BeersComponent } from './beers.component';
import { BeerComponent } from './beer/beer.component';
import { SharedModule } from '../../shared/shared.module';
import { BeersRoutingModule } from './beers-routing.module';
import { BeerDialogComponent } from './beer-dialog/beer-dialog.component';
import {MatDialog} from "@angular/material/dialog";

@NgModule({
  declarations: [
    BeersComponent,
    BeerComponent,
    BeerDialogComponent
  ],
  imports: [
    BeersRoutingModule,
    SharedModule
  ],
  providers: [MatDialog]
})
export class BeersModule { }
