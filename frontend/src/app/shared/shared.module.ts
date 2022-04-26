import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { PlaceListComponent } from './components/place-list/place-list.component';
import { BeerTypeNamePipe } from './pipes/beer-type-name.pipe';
import { CityNamePipe } from './pipes/city-name.pipe';

@NgModule({
  declarations: [
    BeerListComponent,
    PlaceListComponent,
    BeerTypeNamePipe,
    CityNamePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    BeerListComponent,
    PlaceListComponent,
    BeerTypeNamePipe,
    CityNamePipe
  ],
})
export class SharedModule { }
