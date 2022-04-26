import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BeerTypesService} from "../../../core/services/beer-types.service";
import {PlacesService} from "../../../core/services/places.service";
import {BeerType} from "../../../shared/models/beer-type.model";
import {Place} from "../../../shared/models/place.model";
import {Beer, BeerDTO} from "../../../shared/models/beer.model";
import {BeersService} from "../../../core/services/beers.service";
import {LoadingService} from "../../../core/services/loading.service";

@Component({
  selector: 'app-create-beer-dialog',
  templateUrl: './beer-dialog.component.html',
  styleUrls: ['./beer-dialog.component.scss']
})
export class BeerDialogComponent implements OnInit {

  beerFrom!: FormGroup;
  floatLabelControl = new FormControl('auto');
  loading$ = this.loadingService.isLoading$;

  beerTypes: BeerType[] = [];
  beerTypeName = '';
  places: Place[] = [];

  get nameField(): FormControl {
    return this.beerFrom.get('name') as FormControl;
  }

  get abvField(): FormControl {
    return this.beerFrom.get('abv') as FormControl;
  }

  get descENField(): FormControl {
    return this.beerFrom.get('descEN') as FormControl;
  }

  get descFRField(): FormControl {
    return this.beerFrom.get('descFR') as FormControl;
  }

  get beerTypeField(): FormControl {
    return this.beerFrom.get('beerType') as FormControl;
  }

  get beerPlaceField(): FormControl {
    return this.beerFrom.get('beerPlace') as FormControl;
  }

  constructor(
    private readonly dialogRef: MatDialogRef<BeerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly beerTypesService: BeerTypesService,
    private readonly placesService: PlacesService,
    private readonly beersService: BeersService,
    private readonly loadingService: LoadingService,
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {

    this.beerTypeName = (this.data) ? this.data.beerTypes.find((b: BeerType) => b.id === this.data.typeId).name : '';
    this.beerTypes = (this.data) ? this.data?.beerTypes : this.getBeerTypes();

    this.getPlaces();

    this.beerFrom =
      new FormGroup({
        name: new FormControl((this.data) ? this.data.name : '', {validators: [Validators.required]}),
        abv: new FormControl((this.data) ? this.data.abv : '', {validators: [Validators.required]}),
        descFR: new FormControl((this.data) ? this.data.description.fr : '', {validators: [Validators.required]}),
        descEN: new FormControl((this.data) ? this.data.description.en : '', [Validators.required]),
        beerType: new FormControl((this.data) ? this.beerTypeName: '', {validators: [Validators.required]}),
        beerPlace: new FormControl(null, {validators: [Validators.required]})
      });
  }

  submitBeerForm(beerFrom: FormGroup) {
    if (beerFrom.valid) {
      const newBeer: BeerDTO = {
        name: beerFrom.value.name,
        imageSrc: this.randomizeImgs(),
        description: {en: beerFrom.value.descFR, fr: beerFrom.value.descEN},
        abv: beerFrom.value.abv,
        placesId: this.places
          .filter((p: Place) => beerFrom.value.beerPlace.includes(p.name))
          .map((place: Place) => place.id),
        beerTypeDTO: this.beerTypes.find(b => b.name === beerFrom.value.beerType),
      };

      if (this.data) {
        this.beersService.patch(newBeer, this.data.id)
          .subscribe(
            (data: Beer) => this.dialogRef.close(data),
            error => console.error(error));
      } else {
        this.beersService.post(newBeer)
          .subscribe(
            (data: Beer) => this.dialogRef.close(data),
            error => console.error(error));
      }
    }
  }

  getBeerTypes(): void {
    this.beerTypesService.getAll()
      .subscribe(
        (data: BeerType[]) => this.beerTypes = data,
        error => console.error(error));
  }

  getPlaces(): void {
    this.placesService.getAll()
      .subscribe(
        (data: Place[]) => this.places = data,
        error => console.error(error));
  }

  randomizeImgs(): string {
    const beerImages = ['tripel-karmeliet.png', 'affligem_blond_2.png', 'chimay---blauw_v2.png', 'duvel.png', 'pauwel---kwak.png',
      'westmalle-tripel.png', 'rochefort---8_v2.png', 'la-chouffe---blonde_v2.png', 'troubadour-magma.png', 'orval.png'];
    return beerImages[Math.floor(Math.random() * 9) + 1];
  }
}
