import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// actions
import {
  // logIn,
  //  signUp,
  logOut,
} from "../../../../redux/actions/index";

// styles
import { IconButton, Icon, TextLogin, UserName } from "./components";
import { getAuthUser } from "../../../../redux/selectors";

const MenuUser: React.FunctionComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(getAuthUser);

  const handlerClick = () => {
    if (user) {
      dispatch(logOut());
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
      <TextLogin>
        {user ? (
          <UserName>
            {JSON.stringify(user).slice(1, -1)} &nbsp;<span>logout</span>
          </UserName>
        ) : (
          "login"
        )}
      </TextLogin>
    </IconButton>
  );
};

export default MenuUser;
