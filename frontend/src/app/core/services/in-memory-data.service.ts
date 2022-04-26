import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import beerTypes from '../../../assets/data/beer-types.json'
import beers from '../../../assets/data/beers.json'
import cities from '../../../assets/data/cities.json'
import places from '../../../assets/data/places.json'

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {beerTypes, beers, cities, places};
  }
}
