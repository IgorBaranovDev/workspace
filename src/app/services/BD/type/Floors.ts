export type Floors = {
  [key: string]: Array<{
    id: string;
    number: number;
    places: Array<{
      label: string;
      type: string;
      placeStatus: {
        blocked: boolean;
        occupants: string;
        start: number;
        end: number;
      };
    }>;
  }>;
};
