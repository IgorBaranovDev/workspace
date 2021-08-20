// types
import { OfficesData, SelectedOffice } from "../../services/BD/type";

// selectors
export const getAuthUser = (state: { auth: { user: string } }) =>
  state.auth.user;

export const getLoadingState = (state: { auth: { loading: boolean } }) =>
  state.auth.loading;

export const getOfficesData = (state: { officesData: OfficesData }) =>
  state.officesData;

export const getSelectedOffice = (state: {
  workspaces: { selectedOffice: SelectedOffice };
}) => state.workspaces.selectedOffice;

export const getSelectedFloor = (state: {
  workspaces: { selectedFloor: number };
}) => state.workspaces.selectedFloor;
