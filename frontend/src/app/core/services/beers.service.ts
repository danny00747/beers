import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Beer, BeerDTO} from '../../shared/models/beer.model';
import {BeerFilter} from '../../shared/models/beer-filter.model';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class BeersService {

  constructor(private httpClient: HttpClient) {
  }

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
    return this.httpClient.get<Beer[]>('api/beers', {params})
      .pipe(tap((beers: Beer[]) => beers.forEach(b => b.createdAt = this.translateDate(b.createdAt))));
  }

  public get(id: string): Observable<Beer> {
    return this.httpClient.get<Beer>('api/beers/' + id);
  }

  public delete(id?: string): Observable<void> {
    return this.httpClient.delete<void>('api/beers/' + id);
  }

  public post(beer: BeerDTO): Observable<Beer> {
    return this.httpClient.post<Beer>('api/beers', beer);
  }

  public patch(beer: BeerDTO, id?: string): Observable<Beer> {
    return this.httpClient.patch<Beer>(`api/beers/${id}`, beer);
  }

  public getByIds(ids: string[]): Observable<Beer[]> {
    return this.httpClient.get<Beer[]>('api/beers').pipe(
      map(beers => beers.filter(beer => ids.includes(<string>beer.id)))
    );
  }

  public translateDate(date: any): Record<string, string> {
    return {
      en: new Date(date).toLocaleDateString('en', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      fr: new Date(date).toLocaleDateString('fr', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
