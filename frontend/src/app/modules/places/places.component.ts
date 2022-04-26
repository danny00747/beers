import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { City } from '../../shared/models/city.model';
import { PlaceFilter } from '../../shared/models/place-filter.model';
import { PlaceType } from '../../shared/models/place-type.enum';
import { Place } from '../../shared/models/place.model';
import { CitiesService } from '../../core/services/cities.service';
import { PlacesService } from '../../core/services/places.service';

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

  constructor(
    private readonly fb: FormBuilder,
    private readonly citiesService: CitiesService,
    private readonly placesService: PlacesService
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
    return this.placesService.getAll(filter).pipe(tap(places => this.places = places));
  }

}
