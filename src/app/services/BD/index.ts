import { officesData, office } from "./data";

export const getAddressesData = () => officesData;

export const getFloorsData = (id: string) => office[id];
