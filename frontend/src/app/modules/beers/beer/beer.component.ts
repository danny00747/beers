import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Place} from '../../../shared/models/place.model';
import {PlacesService} from 'src/app/core/services/places.service';
import {Beer} from '../../../shared/models/beer.model';
import {BeersService} from '../../../core/services/beers.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {
  public beer?: Beer;
  public places: Place[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly placeService: PlacesService,
    private readonly beerService: BeersService
  ) {
  }

  get currentLocal(): string {
    return $localize.locale ?? 'en'; // default local is english
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => this.beerService.get(params.id)),
      switchMap(beer => {
        this.beer = beer;
        console.log(beer)
        return this.placeService.getByIds(this.beer!.placesId);
      })
    ).subscribe(
      places => this.places = places,
      () => this.router.navigate(['beers'])
    );
  }

}
