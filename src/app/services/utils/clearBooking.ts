import format from "date-fns/format";

// types
import { InfoAboutWorkplace } from "../../components/Home/Office/Canvas/type/InfoAboutWorkplace";

type DataSelectedWorkplace = InfoAboutWorkplace & {
  idOffice: string;
  selectFloor: string;
};

export const clearBooking = ( objectDataToCleanUp : DataSelectedWorkplace) => {
  const dateNow = new Date();
  return {
    ...objectDataToCleanUp,    occupant: "",
    endReservation: format(dateNow, "yyyy-MM-dd"),
    startReservation: format(dateNow, "yyyy-MM-dd"),
  };
};
