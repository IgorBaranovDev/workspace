import React from "react";
import { useHistory } from "react-router-dom";

// styles
import { IconButton, Icon, TextLogin } from "./components";

const MenuUser: React.FunctionComponent = () => {
  const history = useHistory();
  
  const handlerClick = () => {
    history.push("/auth");
  };

  return (
    <IconButton
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handlerClick}
      color="inherit"
    >
      <Icon />
      <TextLogin>log in</TextLogin>
    </IconButton>
  );
};

export default MenuUser;
