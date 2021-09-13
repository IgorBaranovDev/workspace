import isAfter from "date-fns/isAfter";

// types
import { SelectedOffice } from "../BD/type";

// utils fn
import { FormatDate } from "./FormatDate";

export const OfficeDataUpdated = (selectedOffice: SelectedOffice) => {
  const dateNow = new Date();
  const result = {
    ...selectedOffice,
    floors: selectedOffice.floors.map((floor) => ({
      ...floor,
      places: floor.places.map((place) => {
        const endReservation = new Date(place.placeStatus.end);
        const resultCompare = isAfter(dateNow, endReservation);
        return {
          ...place,
          placeStatus: {
            ...place.placeStatus,
            end: resultCompare ? FormatDate(dateNow) : place.placeStatus.end,
            start: resultCompare
              ? FormatDate(dateNow)
              : place.placeStatus.start,
            occupant: resultCompare ? "" : place.placeStatus.occupant,
          },
        };
      }),
    })),
  };

  return result;
};
