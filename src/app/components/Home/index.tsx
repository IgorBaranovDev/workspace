import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthUser } from "../../redux/selectors";

// components
import GroupSelects from "./GroupSelects";

// style
import { TitleHome } from "./components";
// import { officesDate } from "../../services/BD/date";

const Home: React.FC = () => {
  const user = useSelector(getAuthUser);

  
  return (
    <React.Fragment>
      {!user ? (
        <Redirect to="/auth" />
      ) : (
        <>
          <TitleHome>This home page ...✨</TitleHome>
          <GroupSelects />
        </>
      )}
    </React.Fragment>
  );
};

export default Home;
