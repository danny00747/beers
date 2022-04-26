import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Beer} from "../../../shared/models/beer.model";
import {Place, PlaceDTO} from "../../../shared/models/place.model";
import {CitiesService} from "../../../core/services/cities.service";
import {BeersService} from "../../../core/services/beers.service";
import {City} from "../../../shared/models/city.model";
import {PlacesService} from "../../../core/services/places.service";
import {LoadingService} from "../../../core/services/loading.service";

@Component({
  selector: 'app-place-dialog',
  templateUrl: './place-dialog.component.html',
  styleUrls: ['./place-dialog.component.scss']
})
export class PlaceDialogComponent implements OnInit {

  placeFrom!: FormGroup;
  floatLabelControl = new FormControl('auto');

  cities: City[] = [];
  beers: Beer[] = [];
  cityName = '';
  loading$ = this.loadingService.isLoading$;

  get nameField(): FormControl {
    return this.placeFrom.get('name') as FormControl;
  }

  get typeField(): FormControl {
    return this.placeFrom.get('type') as FormControl;
  }

  get addressField(): FormControl {
    return this.placeFrom.get('address') as FormControl;
  }

  get urlField(): FormControl {
    return this.placeFrom.get('url') as FormControl;
  }

  get cityField(): FormControl {
    return this.placeFrom.get('city') as FormControl;
  }

  get placeBeerField(): FormControl {
    return this.placeFrom.get('placeBeer') as FormControl;
  }

  constructor(private readonly dialogRef: MatDialogRef<PlaceDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private readonly citiesService: CitiesService,
              private readonly beerService: BeersService,
              private readonly loadingService: LoadingService,
              private readonly placesService: PlacesService) {
  }

  ngOnInit(): void {

    this.cityName = (this.data) ? this.data.cities.find((c: City) => c.id === this.data.cityId).name : '';
    this.beers = (this.data) ? this.data.beers : this.getBeers();
    this.cities = (this.data) ? this.data.cities : this.getCities();

    this.placeFrom =
      new FormGroup({
        name: new FormControl((this.data) ? this.data.name : '', {validators: [Validators.required]}),
        type: new FormControl((this.data) ? this.data.type : '', {validators: [Validators.required]}),
        address: new FormControl((this.data) ? this.data.address : '', {validators: [Validators.required]}),
        url: new FormControl((this.data) ? this.data.url : '', [Validators.required]),
        city: new FormControl((this.data) ? this.cityName : '', {validators: [Validators.required]}),
        placeBeer: new FormControl(null, {validators: [Validators.required]})
      });
  }

  getCities(): void {
    this.citiesService.getAll()
      .subscribe(
        (data: City[]) => this.cities = data,
        error => console.error(error));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submitPlaceForm(placeFrom: FormGroup) {
    if (placeFrom.valid) {
      const newPlace: PlaceDTO = {
        name: placeFrom.value.name,
        type: placeFrom.value.type,
        url: placeFrom.value.url,
        address: placeFrom.value.address,
        cityDTO: {name: placeFrom.value.city},
        beersId: this.beers.filter(b => placeFrom.value.placeBeer.includes(b.name)).map(beer => beer.id)
      };

      if (this.data) {
        this.placesService.patch(newPlace, this.data.id)
          .subscribe(
            (data: Place) => this.dialogRef.close(data),
            error => console.error(error));
      } else {
        this.placesService.post(newPlace)
          .subscribe(
            (data: Place) => this.dialogRef.close(data),
            error => console.error(error));
      }
    }
  }

  getBeers(): void {
    this.beerService.getAll()
      .subscribe(
        (data: Beer[]) => this.beers = data,
        error => console.error(error));
  }

}
