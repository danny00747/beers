import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BeersService } from './services/beers.service';
import { BeerTypesService } from './services/beer-types.service';
import { CitiesService } from './services/cities.service';
import { PlacesService } from './services/places.service';
import { InMemoryDataService } from './services/in-memory-data.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserModule } from '@angular/platform-browser';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    BeersService,
    BeerTypesService,
    CitiesService,
    PlacesService,
    InMemoryDataService
  ]
})
export class CoreModule { }
