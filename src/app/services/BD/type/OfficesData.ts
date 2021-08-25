export type OfficesData = {
  [country: string]: {
    [city: string]: Array<{
      id: string;
      addres: string;
    }>;
  };
};
