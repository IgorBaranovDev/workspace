import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// actions
import {
  getCurrentUser,
  logOut,
} from "../../../../redux/actions/index";

// styles
import { IconButton, Icon, TextLogin, UserName } from "./components";
import { getAuthUser } from "../../../../redux/selectors";
import firebase from "firebase/app";


const MenuUser: React.FunctionComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(getAuthUser);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {       
        dispatch(getCurrentUser());    
      } else {
     // No user is signed in.
      }
    });
  }, [dispatch]);

  const handlerClick = () => {
    if (user) {
      dispatch(logOut());
      history.push("/auth");
    } else {
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
            {JSON.stringify(user).slice(1, -1)} &nbsp;<span>log out</span>
          </UserName>
        ) : (
          "log in"
        )}
      </TextLogin>
    </IconButton>
  );
};

export default MenuUser;
