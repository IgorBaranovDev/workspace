import IPlaces from "./IPlaces";

export default interface IFloors {
    id: string;
    number: number;
    places: Array<IPlaces>;
  }
