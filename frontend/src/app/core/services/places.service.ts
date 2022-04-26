import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Place } from '../../shared/models/place.model';
import { Observable } from 'rxjs';
import { PlaceFilter } from '../../shared/models/place-filter.model';
import { map } from 'rxjs/operators';

@Injectable()
export class PlacesService {
  constructor(private httpClient: HttpClient) { }

  public getAll(filter?: PlaceFilter): Observable<Place[]> {
    let params: HttpParams = new HttpParams();
    if (filter) {
      if (filter.cityId) {
        params = params.append('cityId', filter.cityId);
      }
      if (filter.type) {
        params = params.append('type', filter.type);
      }
    }
    return this.httpClient.get<Place[]>('api/places', {params});
  }

  public get(id: string): Observable<Place> {
    return this.httpClient.get<Place>('api/places/' + id);
  }

  public getByIds(ids: string[]): Observable<Place[]> {
    return this.httpClient.get<Place[]>('api/places').pipe(
      map(places => places.filter(place =>ids.includes(place.id)))
    );
  }
}
