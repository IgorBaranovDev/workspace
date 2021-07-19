import React from "react";

// styles
import { IconButton, Icon, TextLogin } from "./components";

const MenuUser: React.FunctionComponent = () => (    
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
    
  );

export default MenuUser;
