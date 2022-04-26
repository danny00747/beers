import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {filter, switchMap, tap} from 'rxjs/operators';
import {BeerFilter} from '../../shared/models/beer-filter.model';
import {BeerType} from '../../shared/models/beer-type.model';
import {BeerTypesService} from '../../core/services/beer-types.service';
import {Beer} from '../../shared/models/beer.model';
import {BeersService} from '../../core/services/beers.service';
import {MatDialog} from "@angular/material/dialog";
import {BeerDialogComponent} from "./beer-dialog/beer-dialog.component";
import {ToastService} from "../../core/services/toast.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  public beerFilter: FormGroup;
  public beerTypes: BeerType[] = [];
  public beers: Beer[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly beerTypesService: BeerTypesService,
    private readonly beersService: BeersService,
    private readonly dialog: MatDialog,
    private readonly toastService: ToastService,
    private readonly translateService: TranslateService,
  ) {
    this.beerFilter = this.fb.group({
      typeId: [undefined],
      abv: [undefined]
    })
  }


  ngOnInit(): void {
    this.beerTypesService.getAll().subscribe(beerTypes => this.beerTypes = beerTypes);
    this.filterBeers().subscribe();

    this.beerFilter.valueChanges.pipe(
      switchMap((filter: BeerFilter) => this.filterBeers(filter))
    ).subscribe();
  }

  public filterBeers(filter?: BeerFilter): Observable<Beer[]> {
    return this.beersService.getAll()
      .pipe(tap(beers => this.beers = (filter) ? beers.filter(b => b.typeId === filter?.typeId) : beers));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BeerDialogComponent, {
      width: '800px',
      disableClose: true
    });

    //TODO: add modified date to created beer
    dialogRef.afterClosed()
      .pipe(
        filter((result: Beer) => !!result),
        tap((result: Beer) => {
          result.createdAt = this.beersService.translateDate(result.createdAt);
          this.beers.push(result);
          this.toastService.show(this.translateService.instant('BEERS.TOAST.CREATE'));
        }))
      .subscribe();
  }

}


