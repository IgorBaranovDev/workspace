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
  addresesData: Array<Array<IarrCity>>;
}

const ListOfAddresses: React.FC<IListOfAddresses> = ({ addresesData }) => {  
  return (
    <>
      <NavListOfAddress>
        {addresesData?.map(([address, office_id], index) => (            
          <ListItem key={`addres-${index}`}>
            <LocationOnIcon color="secondary" />
            <LinkOfAdress
              to={`/office/${office_id}`}
              id={address as string}
            >
              {address}
            </LinkOfAdress>
          </ListItem>
        ))}
      </NavListOfAddress>
    </>
  );
};

export default ListOfAddresses;
