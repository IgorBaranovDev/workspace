import React from "react";
import { useHistory } from "react-router-dom";

// styles
import { LogoWrapper, Text } from "./components";

const Logo: React.FunctionComponent = () => {
  const history = useHistory();

  const handlerClick = () => history.push("/");

  return (
    <LogoWrapper onClick={handlerClick}>
      <Text>Workspace</Text>
    </LogoWrapper>
  );
};

export default Logo;
