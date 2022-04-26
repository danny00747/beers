export interface Beer {
  id: string;
  name: string;
  typeId: string;
  imageSrc: string;
  description: Record<string, string>,
  abv: number;
  placesId: string[];
}
