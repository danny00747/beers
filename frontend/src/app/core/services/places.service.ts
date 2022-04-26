import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Place, PlaceDTO} from '../../shared/models/place.model';
import {Observable} from 'rxjs';
import {PlaceFilter} from '../../shared/models/place-filter.model';
import {map, tap} from 'rxjs/operators';
import {BeersService} from "./beers.service";
import {Beer} from "../../shared/models/beer.model";

@Injectable()
export class PlacesService {
  constructor(private readonly httpClient: HttpClient,
              private readonly beersService: BeersService) {
  }

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
    return this.httpClient.get<Place[]>('api/places', {params})
      .pipe(tap((places: Place[]) => places.forEach(p => p.createdAt = this.beersService.translateDate(p.createdAt))));
  }

  public get(id: string): Observable<Place> {
    return this.httpClient.get<Place>(`api/places/${id}`);
  }

  public delete(id?: string): Observable<void> {
    return this.httpClient.delete<void>(`api/places/${id}`);
  }

  public post(place: PlaceDTO): Observable<Place> {
    return this.httpClient.post<Place>('api/places', place);
  }

  public patch(place: PlaceDTO, id?: string): Observable<Place> {
    return this.httpClient.patch<Place>(`api/places/${id}`, place);
  }

  public getByIds(ids: string[]): Observable<Place[]> {
    return this.httpClient.get<Place[]>('api/places').pipe(
      map(places => places.filter(place => ids.includes(place.id)))
    );
  }
}
