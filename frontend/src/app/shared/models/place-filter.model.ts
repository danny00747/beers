import { PlaceType } from "./place-type.enum";

export interface PlaceFilter {
  type: PlaceType;
  cityId: string;
}
