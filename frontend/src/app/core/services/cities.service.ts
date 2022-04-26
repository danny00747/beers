import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { City } from '../../shared/models/city.model';

@Injectable()
export class CitiesService {

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<City[]> {
    return this.httpClient.get<City[]>('api/cities');
  }
}
