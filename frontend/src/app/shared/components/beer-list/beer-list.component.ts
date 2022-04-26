import {Component, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {Beer} from '../../models/beer.model';
import {MatDialog} from "@angular/material/dialog";
import {BeerDialogComponent} from "../../../modules/beers/beer-dialog/beer-dialog.component";
import {TranslateService} from "@ngx-translate/core";
import {ConfirmationDialogComponent} from "../confirmation-dialog/confirmation-dialog.component";
import {BeersService} from "../../../core/services/beers.service";
import {BeerType} from "../../models/beer-type.model";
import {BeerTypesService} from "../../../core/services/beer-types.service";
import {filter, switchMap, takeUntil, tap} from "rxjs/operators";
import {ReplaySubject} from "rxjs";
import {ToastService} from "../../../core/services/toast.service";
import {LangService} from "../../../core/services/lang.service";
import {LoadingService} from "../../../core/services/loading.service";

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit, OnDestroy {

  @Input('beers') beers: Beer[] = [];
  beerTypes: BeerType[] = [];
  currentLang$ = this.langService.getCurrentLang;

  // Observable used to notify subscription when to end
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private readonly dialog: MatDialog,
    private readonly translateService: TranslateService,
    private readonly beerTypesService: BeerTypesService,
    private readonly beersService: BeersService,
    private readonly toastService: ToastService,
    private readonly langService: LangService,
    private readonly loadingService: LoadingService,
  ) {
  }

  ngOnInit(): void {
    this.getBeerTypes();
  }

  editBeer(beer: Beer) {
    const dialogRef = this.dialog.open(BeerDialogComponent, {
      width: '800px',
      disableClose: true,
      data: {...beer, beerTypes: this.beerTypes},
    });

    // TODO: add modified date to updated beer
    dialogRef.afterClosed()
      .pipe(
        takeUntil(this.destroyed$),
        filter((result: Beer) => !!result),
        tap((result: Beer) => {
          result.createdAt = this.beersService.translateDate(result.createdAt);
          this.beers[this.beers.findIndex((b: Beer) => b.id === result.id)] = result;
          this.toastService.show(this.translateService.instant('BEERS.TOAST.UPDATE'));
        }))
      .subscribe();
  }

  deleteBeer(beer: Beer) {
    const ref = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: {
        message: this.translateService.instant('BEERS.DELETE_MESSAGE'),
        title: this.translateService.instant('BEERS.DELETE')
      }
    });

    ref.afterClosed()
      .pipe(
        filter((confirm: boolean) => confirm),
        switchMap(() => this.beersService.delete(beer.id)))
      .subscribe(
        () => {
          this.beers.splice(this.beers.findIndex((b: Beer) => b.id === beer.id), 1);
          this.toastService.show(this.translateService.instant('BEERS.TOAST.DELETE'))
        },
        error => console.error(error))
  }

  getBeerTypes(): void {
    this.beerTypesService.getAll()
      .subscribe(
        (data: BeerType[]) => this.beerTypes = data,
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
