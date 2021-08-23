export type Places = Array<{
  label: string;
  type: string;
  placeStatus: {
    blocked: boolean;
    occupant: string;
    start: number;
    end: number;
    coordinates: {
      x?: number;
      y?: number;
      width?: number;
      height?: number;
    };
  };
}>;

export type Floors = Array<{
  number: number;
  places: Places;
}>;
