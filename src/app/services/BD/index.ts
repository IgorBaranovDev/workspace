import { officesData, floors } from "./date";

export const getAddressesData = () => officesData; 

export const getFloorsData = (id: string) =>  floors[id];
