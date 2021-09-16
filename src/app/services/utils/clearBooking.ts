// types
import { InfoAboutWorkplace } from "../../components/Home/Office/Canvas/type/InfoAboutWorkplace";

type DataSelectedWorkplace = InfoAboutWorkplace & {
  idOffice: string;
  selectFloor: string;
};

export const clearBooking = (objectDataToCleanUp: DataSelectedWorkplace) => {  
  return {
    ...objectDataToCleanUp,
    occupant: "",
    endReservation: "",
    startReservation: "",
  };
};
