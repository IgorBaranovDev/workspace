import React from "react";

// styles
import { ListItem, NavListOfAddress, LinkOfAdress } from "./components";

// material-ui
import LocationOnIcon from "@material-ui/icons/LocationOn";
// import { SelectedOffice } from "../../../services/BD/type";

// type
interface IarrCity {
  [key: number]: string;
}
// type AddresData = {
//   id: string;
//   addres: string;
// }
interface IListOfAddresses {
  addresesData: Array<IarrCity>;
}

const ListOfAddresses: React.FC<IListOfAddresses> = ({ addresesData }) => {
  console.log(addresesData)
  return (
    <>
      <NavListOfAddress>
        {addresesData?.map((element: any, index) => (
          <ListItem key={element.id}>
            <LocationOnIcon color="secondary" />
            <LinkOfAdress
              to={`/office/${element.id}`}
              id={element.id as string}
            >
              {element.addres}
            </LinkOfAdress>
          </ListItem>
        ))}
      </NavListOfAddress>
    </>
  );
};

export default ListOfAddresses;
