import React from "react";

// styles
import { ListItems, NavListOfAddress, LinkOfAdress } from "./components";

// material-ui
import LocationOnIcon from "@material-ui/icons/LocationOn";

// type
interface IarrCity {
  [key: number]: string;
}
interface IListOfAddresses {
  addresesData: Array<Array<IarrCity>>;
}

const ListOfAddresses: React.FC<IListOfAddresses> = ({ addresesData }) => {
  return (
    <>
      <NavListOfAddress>
        {addresesData?.map(([address, office_id], index) => (
          <ListItems>
            <LocationOnIcon color="secondary" />
            <LinkOfAdress
              to={`/office/${office_id}`}
              key={index}
              id={address as string}
            >
              {address}
            </LinkOfAdress>
          </ListItems>
        ))}
      </NavListOfAddress>
    </>
  );
};

export default ListOfAddresses;
