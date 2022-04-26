import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs';
import {filter, switchMap, tap} from 'rxjs/operators';
import {City} from '../../shared/models/city.model';
import {PlaceFilter} from '../../shared/models/place-filter.model';
import {PlaceType} from '../../shared/models/place-type.enum';
import {Place} from '../../shared/models/place.model';
import {CitiesService} from '../../core/services/cities.service';
import {PlacesService} from '../../core/services/places.service';
import {Beer} from "../../shared/models/beer.model";
import {MatDialog} from "@angular/material/dialog";
import {PlaceDialogComponent} from "./place-dialog/place-dialog.component";
import {BeersService} from "../../core/services/beers.service";
import {ToastService} from "../../core/services/toast.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  public PlaceType: typeof PlaceType = PlaceType;
  public placeFilter: FormGroup;
  public cities: City[] = [];
  public places: Place[] = [];
  public beers: Beer[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly citiesService: CitiesService,
    private readonly placesService: PlacesService,
    private readonly beersService: BeersService,
    private readonly dialog: MatDialog,
    private readonly toastService: ToastService,
    private readonly translateService: TranslateService,
  ) {
    this.placeFilter = this.fb.group({
      cityId: [undefined],
      type: [undefined]
    })
  }

  ngOnInit(): void {
    this.citiesService.getAll().subscribe(cities => this.cities = cities);
    this.filterPlaces().subscribe();

    this.placeFilter.valueChanges.pipe(
      switchMap((filter: PlaceFilter) => this.filterPlaces(filter))
    ).subscribe();
  }

  public filterPlaces(filter?: PlaceFilter): Observable<Place[]> {
    return this.placesService.getAll()
      .pipe(tap(places => this.places = (filter) ? places.filter(p => p.type === filter?.type) : places));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PlaceDialogComponent, {
      width: '750px',
      disableClose: true
    });

    // TODO: add modified date to created place
    dialogRef.afterClosed()
      .pipe(
        filter((result: Place) => !!result),
        tap((result: Place) => {
          result.createdAt = this.beersService.translateDate(result.createdAt);
          this.places.push(result);
          this.toastService.show(this.translateService.instant('PLACES.TOAST.CREATE'));
        }))
      .subscribe();
  }

}
