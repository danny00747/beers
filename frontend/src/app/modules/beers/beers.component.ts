import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { BeerFilter } from '../../shared/models/beer-filter.model';
import { BeerType } from '../../shared/models/beer-type.model';
import { BeerTypesService } from '../../core/services/beer-types.service';
import { Beer } from '../../shared/models/beer.model';
import { BeersService } from '../../core/services/beers.service';

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
    private readonly beersService: BeersService
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
    return this.beersService.getAll(filter).pipe(tap(beers => this.beers = beers));
  }

}
