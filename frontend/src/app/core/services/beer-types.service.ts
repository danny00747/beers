import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BeerType } from '../../shared/models/beer-type.model';

@Injectable()
export class BeerTypesService {
  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<BeerType[]> {
    return this.httpClient.get<BeerType[]>('api/beerTypes');
  }
}
