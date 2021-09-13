import isAfter from "date-fns/isAfter";

// types
import { SelectedOffice } from "../BD/type";

// utils fn
import { FormatDate } from "./FormatDate";

export const OfficeDataUpdated = (selectedOffice: SelectedOffice) => {
  const result = {
    ...selectedOffice,
    floors: selectedOffice.floors.map((floor) => ({
      ...floor,
      places: floor.places.map((place) => ({
        ...place,
        placeStatus: {
          ...place.placeStatus,
          end: isAfter(new Date(), new Date(place.placeStatus.end))
            ? FormatDate(new Date())
            : place.placeStatus.end,
          start: isAfter(new Date(), new Date(place.placeStatus.end))
            ? FormatDate(new Date())
            : place.placeStatus.start,
          occupant: isAfter(new Date(), new Date(place.placeStatus.end))
            ? ""
            : place.placeStatus.occupant,
        },
      })),
    })),
  };

  return result;
};
