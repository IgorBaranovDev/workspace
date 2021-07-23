import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// actions
import {
  // logIn,
  //  signUp,
  logOut,
} from "../../../../redux/actions";

// styles
import { IconButton, Icon, TextLogin } from "./components";
import { getAuthUser } from "../../../../redux/selectors";

const MenuUser: React.FunctionComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(getAuthUser);

  const handlerClick = () => {
    if (user) {
      dispatch(logOut());
      // dispatch({ type: LOGOUT });
    } else {
      history.push("/auth");
    }
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
      <TextLogin>{user ? `${JSON.stringify(user)} (logOut)` : "login"}</TextLogin>
    </IconButton>
  );
};

export default MenuUser;
