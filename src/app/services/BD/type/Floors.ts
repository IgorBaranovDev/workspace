export type Places = Array<{
  label: string;
  type: string;
  placeStatus: {
    blocked: boolean;
    occupant: string;
    start: string;
    end: string;
  };
  coordinates: {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
  };
}>;

export type Floors = Array<{
  number: number;
  places: Places;
  floorImageSrc: string;
}>;


export type Place = {
  label: string;
  type: string;
  placeStatus: {
    blocked: boolean;
    occupant: string;
    start: string;
    end: string;
  };
  coordinates: {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
  };
}