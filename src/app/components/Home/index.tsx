import React from "react";
import { Redirect } from "react-router-dom";

import { useSelector } from "react-redux";
import { getAuthUser } from "../../redux/selectors";

// style
import { TitleHome } from "./components";

const Home: React.FC = () => {
  const user = useSelector(getAuthUser);
  return (
    <React.Fragment>
      {!user ? (
        <Redirect to="/auth" />
      ) : (
        <TitleHome>This home page ...✨</TitleHome>
      )}
    </React.Fragment>
  );
};

export default Home;
