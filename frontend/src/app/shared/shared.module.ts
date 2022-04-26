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
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule} from "@angular/forms";
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {NotFoundComponent} from './components/not-found/not-found.component';
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    BeerListComponent,
    PlaceListComponent,
    BeerTypeNamePipe,
    CityNamePipe,
    ConfirmationDialogComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
    TranslateModule,
    MatDialogModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    BeerListComponent,
    MatCardModule,
    PlaceListComponent,
    MatProgressSpinnerModule,
    BeerTypeNamePipe,
    CityNamePipe,
    MatCheckboxModule,
    TranslateModule,
    MatDialogModule,
    ConfirmationDialogComponent,
    NotFoundComponent
  ],
  providers: [MatSnackBar]
})
export class SharedModule { }
