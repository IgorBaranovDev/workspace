import { officesData, floors } from "./data";

export const getAddressesData = () => officesData; 

export const getFloorsData = (id: string) =>  floors[id];
