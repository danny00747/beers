import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from '../../shared/models/beer.model';
import { BeerFilter } from '../../shared/models/beer-filter.model';
import { map } from 'rxjs/operators';

@Injectable()
export class BeersService {
  constructor(private httpClient: HttpClient) { }

  public getAll(filter?: BeerFilter): Observable<Beer[]> {
    let params: HttpParams = new HttpParams();
    if (filter) {
      if (filter.typeId) {
        params = params.append('typeId', '^' + filter.typeId + '$');
      }
      if (filter.abv) {
        params = params.append('abv', filter.abv);
      }
    }
    return this.httpClient.get<Beer[]>('api/beers', {params});
  }

  public get(id: string): Observable<Beer> {
    return this.httpClient.get<Beer>('api/beers/' + id);
  }

  public getByIds(ids: string[]): Observable<Beer[]> {
    return this.httpClient.get<Beer[]>('api/beers').pipe(
      map(beers => beers.filter(beer =>ids.includes(beer.id)))
    );
  }
}
