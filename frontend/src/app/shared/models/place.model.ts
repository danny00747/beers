import { PlaceType } from "./place-type.enum";

export interface Place {
  id: string;
  name: string;
  type: PlaceType;
  address: string;
  cityId: string;
  url: string;
  beersId: string[];
}
