import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useStore } from "react-redux";

// actions
import {
  // logIn,
  //  signUp,
  logOut,
} from "../../../../redux/actions";

// import {
//   LOGIN_REQUEST,
//   SINGUP_REQUEST,
//   AUTH_SUCCESS,
//   AUTH_FAILURE,
//   LOGOUT,
// } from "../../../../redux/actions";

// styles
import { IconButton, Icon, TextLogin } from "./components";

const MenuUser: React.FunctionComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const store = useStore();
  const user = store.getState();

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
      <TextLogin>{user ? `${user} (logOut)` : "login"}</TextLogin>
    </IconButton>
  );
};

export default MenuUser;
