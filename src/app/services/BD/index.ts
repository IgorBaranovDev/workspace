import firebase from "firebase/app";
import "firebase/database";

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
    .ref("/offices/" + id)
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("no data available");
      }
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};
