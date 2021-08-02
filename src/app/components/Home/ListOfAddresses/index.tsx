import React from "react";

import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { ListItemIcon } from "@material-ui/core";

const ListItemLink = (props: ListItemProps<"a", { button?: true }>) => {
  return (
    <>
      <li>
        <ListItem button component="a" {...props} />
      </li>
      <Divider variant="middle" />
    </>
  );
};

interface IarrCity {
  [key: number]: string;
}

interface IListOfAddresses {
  addresesData: Array<IarrCity>;
}

const ListOfAddresses: React.FC<IListOfAddresses> = ({ addresesData }) => {
  return (
    <>
      <List component="nav" aria-label="secondary mailbox folders">
        {addresesData?.map((keyName, item, index) => (
          <ListItemLink href={`/office/${keyName as string}`} key={item}>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary={keyName as string} />
          </ListItemLink>
        ))}
      </List>
    </>
  );
};

export default ListOfAddresses;
