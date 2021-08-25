import React from "react";

// styles
import { ListItem, NavListOfAddress, LinkOfAdress } from "./components";

// material-ui
import LocationOnIcon from "@material-ui/icons/LocationOn";

// type
interface IarrCity {
  [key: number]: string;
}
interface IListOfAddresses {
  addresesData: Array<IarrCity>;
}

const ListOfAddresses: React.FC<IListOfAddresses> = ({ addresesData }) => {
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
