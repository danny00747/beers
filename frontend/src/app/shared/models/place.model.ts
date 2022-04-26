import { PlaceType } from "./place-type.enum";

export interface Place {
  id: string;
  name: string;
  type: PlaceType;
  address: string;
  cityId: string;
  url: string;
  beersId: string[];
  createdAt: any;
}


export interface PlaceDTO {
  name: string;
  type: string;
  address: string;
  cityDTO: Record<string, string>;
  url: string;
  beersId: string[];
}
