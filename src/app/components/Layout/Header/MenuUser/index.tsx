import React from "react";

// styles
import { IconButton, Icon, TextLogin } from "./components";

const MenuUser: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        // onClick={}
        color="inherit"
      >
        <Icon />
        <TextLogin>log in</TextLogin>
      </IconButton>   
    </React.Fragment>
  );
};

export default MenuUser;
