import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Beer } from 'src/app/shared/models/beer.model';
import { BeersService } from '../../../core/services/beers.service';
import { Place } from '../../../shared/models/place.model';
import { PlacesService } from '../../../core/services/places.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  public place?: Place;
  public beers: Beer[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly placeService: PlacesService,
    private readonly beerService: BeersService
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => this.placeService.get(params.id)),
      switchMap(place => {
        this.place = place;
        return this.beerService.getByIds(this.place.beersId);
      })
    ).subscribe(
      beers => this.beers = beers,
      () => this.router.navigate(['places'])
    );
  }

}
