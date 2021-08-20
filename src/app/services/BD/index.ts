import { officesData, offices } from "./data";

export const getAddressesData = () => officesData;

export const getSelectedOffice = (id: string) => offices[id];
