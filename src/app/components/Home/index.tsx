import React from "react";
import { Redirect, Route } from "react-router-dom";

import { useSelector } from "react-redux";
import { getAuthUser } from "../../redux/selectors";

// style
import { TitleHome } from "./components";

const Home: React.FC = () => {
  const user = useSelector(getAuthUser);
  return (
    <Route exact path="/">
      {!user ? (
        <Redirect to="/auth" />
      ) : (
        <TitleHome>This home page ...✨</TitleHome>
      )}
    </Route>
  );
};

export default Home;
