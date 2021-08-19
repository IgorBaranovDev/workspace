export type Office = {
  [officeId: string]: {
    addres: {
      country: string;
      city: string;
      location: string;
    };
    id: string;
    floors: Array<{
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
};
