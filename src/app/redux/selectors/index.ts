// types
import { OfficesData } from "../../services/BD/type/OfficesData";

// selectors
export const getAuthUser = (state: { auth: { user: string } }) => state.auth.user;

export const getOfficesData = (state: {officesData: OfficesData}) => state.officesData;
