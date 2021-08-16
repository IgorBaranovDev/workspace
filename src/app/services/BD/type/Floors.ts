export type Floors = {
  [key: string]: Array<{
    id: string;
    number: number;
    places: Array<{
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
  }>;
};
