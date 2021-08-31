import firebase from "firebase/app";
import "firebase/database";
import { PlaceReservation } from "./type";

export const getAddressesData = async () => {  
  return await firebase
    .database()
    .ref("officesData/")
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        return data;
      } else {
        console.log("no data available");
        return null;
      }
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};

export const getSelectedOffice = async (id: string) => {
  return await firebase
    .database()
    .ref("offices/" + id)
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("no data available");
        return null;
      }
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};

export const setReservation = async (placeReservation: PlaceReservation) => {
  const result = new Promise<string>((resolve, reject) => {
    firebase
      .database()
      .ref(
        "offices/" +
          placeReservation.idOffice +
          "/floors/" +
          placeReservation.selectFloor +
          "/places/" +
          placeReservation.palceIndex +
          "/placeStatus/"
      )
      .set(
        {
          blocked: placeReservation.blocked,
          start: placeReservation.startReservation,
          end: placeReservation.endReservation,
          occupant: placeReservation.occupant,
        },
        (error) => {
          if (error) {
            reject();
            console.log("not save data", error.message);
          } else {
            resolve(placeReservation.idOffice);
            console.log("data save in BD");
          }
        }
      );
  });
  return result;
};
