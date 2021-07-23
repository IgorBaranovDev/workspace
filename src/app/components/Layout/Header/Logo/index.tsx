import React from "react";
import { Link } from "react-router-dom";

// styles
import { LogoWrapper, Text } from "./components";

const Logo: React.FunctionComponent = () => {
  return (
    <Link to='/'>
      <LogoWrapper>
        <Text>Workspace</Text>
      </LogoWrapper>
    </Link>
  );
};

export default Logo;
