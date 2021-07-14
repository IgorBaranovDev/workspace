import React from "react";
import LogoWrapper from "./components/LogoWrapper";
import Text from "./components/Text";

const Logo: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <LogoWrapper>
        <Text>Logo</Text>
      </LogoWrapper>
    </React.Fragment>
  );
};

export default Logo;
