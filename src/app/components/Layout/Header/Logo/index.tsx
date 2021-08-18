import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

//selectors
import { getAuthUser } from "../../../../redux/selectors";

// styles
import { LogoWrapper, Text } from "./components";

const Logo: React.FunctionComponent = () => {
  const history = useHistory();
  const user = useSelector(getAuthUser);

  const handlerClick = () => {
    if (user) {
      history.push("/");
    } else {
      history.push("/auth");
    }
  };
  return (
    <LogoWrapper>
      <Text onClick={handlerClick}>Workspace</Text>
    </LogoWrapper>
  );
};

export default Logo;
