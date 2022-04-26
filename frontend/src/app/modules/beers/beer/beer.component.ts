import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {filter, map, switchMap} from 'rxjs/operators';
import {Place} from '../../../shared/models/place.model';
import {PlacesService} from 'src/app/core/services/places.service';
import {Beer} from '../../../shared/models/beer.model';
import {BeersService} from '../../../core/services/beers.service';
import {LangService} from "../../../core/services/lang.service";
import {LoadingService} from "../../../core/services/loading.service";

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {
  beer!: Beer;
  places: Place[] = [];
  currentLang$ = this.langService.getCurrentLang;
  errorMessage: Record<string, string> = {};

  constructor(
    private readonly route: ActivatedRoute,
    private readonly placeService: PlacesService,
    private readonly beerService: BeersService,
    private readonly langService: LangService
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      filter(params => !!params.id),
      switchMap(params => this.beerService.get(params.id)),
      switchMap(beer => {
        this.beer = beer;
        return this.placeService.getByIds(this.beer.placesId);
      })
    ).subscribe(
      places => this.places = places,
      err => this.errorMessage = err.error
    );
  }
}
