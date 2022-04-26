import { NgModule } from '@angular/core';
import { BeersComponent } from './beers.component';
import { BeerComponent } from './beer/beer.component';
import { SharedModule } from '../../shared/shared.module';
import { BeersRoutingModule } from './beers-routing.module';



@NgModule({
  declarations: [
    BeersComponent,
    BeerComponent
  ],
  imports: [
    BeersRoutingModule,
    SharedModule
  ]
})
export class BeersModule { }
