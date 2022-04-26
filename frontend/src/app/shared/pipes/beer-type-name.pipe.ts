import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BeerTypesService } from '../../core/services/beer-types.service';

@Pipe({
  name: 'beerTypeName'
})
export class BeerTypeNamePipe implements PipeTransform {
  constructor(
    private readonly beerTypesService: BeerTypesService
  ) { }

  transform(id?: string): Observable<string> {
    return id ? this.beerTypesService.getAll().pipe(
      map(beerTypes => beerTypes.find(beerType => beerType.id === id)!.name),
     tap((e) => console.log(e)
     )
    ) : of('No id');
  }
}
