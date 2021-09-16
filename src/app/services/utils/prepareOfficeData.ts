import isAfter from "date-fns/isAfter";
import format from "date-fns/format";

// types
import { SelectedOffice } from "../BD/type";

export const prepareOfficeData = (selectedOffice: SelectedOffice) => {
  const dateNow = new Date();
  const result = {
    ...selectedOffice,
    floors: selectedOffice.floors.map((floor) => ({
      ...floor,
      places: floor.places.map((place) => {
        const endReservation = new Date(place.placeStatus.end!);
        const isReservationExpired = isAfter(dateNow, endReservation);
        return {
          ...place,
          placeStatus: {
            ...place.placeStatus,
            end: isReservationExpired
              ? format(dateNow, "yyyy-MM-dd")
              : place.placeStatus.end,
            start: isReservationExpired
              ? format(dateNow, "yyyy-MM-dd")
              : place.placeStatus.start,
            occupant: isReservationExpired ? "" : place.placeStatus.occupant,
          },
        };
      }),
    })),
  };

  return result;
};
