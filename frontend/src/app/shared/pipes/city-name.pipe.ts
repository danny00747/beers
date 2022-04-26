import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CitiesService } from '../../core/services/cities.service';

@Pipe({
  name: 'cityName'
})
export class CityNamePipe implements PipeTransform {
  constructor(
    private readonly citiesService: CitiesService
  ) { }

  transform(id?: string): Observable<string> {
    return id ? this.citiesService.getAll().pipe(
      map(cities => cities.find(city => city.id === id)!.name)
    ) : of('No id');
  }
}
