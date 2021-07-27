import IFloors from "./IFloors";

export default interface IOffices {
    country: string;
    city: string;
    address: string;
    floors: Array<IFloors>;
  }
