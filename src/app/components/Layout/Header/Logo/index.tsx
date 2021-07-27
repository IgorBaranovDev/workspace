import React from "react";
import { Link } from "react-router-dom";

// styles
import { LogoWrapper, Text } from "./components";

const Logo: React.FunctionComponent = () => {
  return (
    <LogoWrapper>
      <Link to="/" >
        <Text>Workspace</Text>
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
