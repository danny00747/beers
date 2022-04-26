import { Component, Input } from '@angular/core';
import { Place } from '../../models/place.model';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent {
  @Input('places') places: Place[] = [];
}
