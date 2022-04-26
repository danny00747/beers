import {BeerType} from "./beer-type.model";

export interface Beer {
  id: string;
  name: string;
  typeId: string;
  imageSrc: string;
  description: Record<string, string>,
  abv: number;
  placesId: string[];
  createdAt: Record<string, string>,
}

export interface BeerDTO {
  name: string;
  beerTypeDTO?: BeerType;
  imageSrc: string;
  description: Record<string, string>,
  abv: number;
  placesId: string[];
}
