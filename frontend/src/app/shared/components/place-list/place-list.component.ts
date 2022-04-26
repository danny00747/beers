import {Component, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {Place} from '../../models/place.model';
import {MatDialog} from "@angular/material/dialog";
import {TranslateService} from "@ngx-translate/core";
import {PlaceDialogComponent} from "../../../modules/places/place-dialog/place-dialog.component";
import {ConfirmationDialogComponent} from "../confirmation-dialog/confirmation-dialog.component";
import {PlacesService} from "../../../core/services/places.service";
import {City} from "../../models/city.model";
import {CitiesService} from "../../../core/services/cities.service";
import {BeersService} from "../../../core/services/beers.service";
import {Beer} from "../../models/beer.model";
import {filter, switchMap, takeUntil, tap} from "rxjs/operators";
import {ReplaySubject} from "rxjs";
import {ToastService} from "../../../core/services/toast.service";
import {LangService} from "../../../core/services/lang.service";

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit, OnDestroy {
  @Input('places') places: Place[] = [];
  public cities: City[] = [];
  private beers: Beer[] = [];
  currentLang$ = this.langService.getCurrentLang;

  // Observable used to notify subscription when to end
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private readonly dialog: MatDialog,
    private readonly translateService: TranslateService,
    private readonly citiesService: CitiesService,
    private readonly placesService: PlacesService,
    private readonly beersService: BeersService,
    private readonly toastService: ToastService,
    private readonly langService: LangService
  ) {
  }

  ngOnInit(): void {
    this.getCities();
    this.getBeers();
  }

  editPlace(place: Place) {
    const dialogRef = this.dialog.open(PlaceDialogComponent, {
      width: '750px',
      disableClose: true,
      data: {...place, cities: this.cities, beers: this.beers},
    });

    // TODO: add modified date to updated place
    dialogRef.afterClosed()
      .pipe(
        takeUntil(this.destroyed$),
        filter((result: Place) => !!result),
        tap((result: Place) => {
          result.createdAt = this.beersService.translateDate(result.createdAt);
          this.places[this.places.findIndex((p: Place) => p.id === result.id)] = result;
          this.toastService.show(this.translateService.instant('PLACES.TOAST.UPDATE'));
        }))
      .subscribe();
  }

  deletePlace(place: Place) {
    const ref = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: {
        message: this.translateService.instant('PLACES.DELETE_MESSAGE'),
        title: this.translateService.instant('PLACES.DELETE')
      }
    });

    ref.afterClosed()
      .pipe(
        filter((confirm: boolean) => confirm),
        switchMap(() => this.placesService.delete(place.id)))
      .subscribe(
        () => {
          this.places.splice(this.places.findIndex((p: Place) => p.id === place.id), 1);
          this.toastService.show(this.translateService.instant('PLACES.TOAST.DELETE'));
        },
        error => console.error(error));
  }

  getCities(): void {
    this.citiesService.getAll()
      .subscribe(
        (data: City[]) => this.cities = data,
        error => console.error(error));
  }

  getBeers(): void {
    this.beersService.getAll()
      .subscribe(
        (data: Beer[]) => this.beers = data,
        error => console.error(error));
  }

  /*
    Stays subscribed until the component is about to be unload.
    A subject is used to notify a subscription to end
  */
  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
