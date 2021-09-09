// types
import { Floors, OfficesData, SelectedOffice } from "../../services/BD/type";

// selectors
export const getAuthUser = (state: { auth: { user: string } }) =>
  state.auth.user;

export const getLoadingState = (state: { auth: { loading: boolean } }) =>
  state.auth.loading;

export const getOfficesData = (state: {
  workspaces: { officesData: OfficesData };
}) => state.workspaces.officesData;

export const getSelectedOffice = (state: {
  workspaces: { selectedOffice: SelectedOffice };
}) => state.workspaces.selectedOffice;

export const getDataFloors = (state: {
  workspaces: { selectedOffice: { floors: Floors } };
}) => state.workspaces.selectedOffice.floors;

export const getSelectedFloor = (state: {
  workspaces: { selectedFloor: number };
}) => state.workspaces.selectedFloor;

export const getErrorAuth = (state: { auth: { errorAuth: boolean } }) =>
  state.auth.errorAuth;
