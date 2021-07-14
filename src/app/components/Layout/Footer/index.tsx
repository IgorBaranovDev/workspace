import React from "react";

// styles
import { WrapperFooter, CopyrightText } from "./coponents";

const Footer: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <WrapperFooter>
        <CopyrightText>© 2021</CopyrightText>
      </WrapperFooter>
    </React.Fragment>
  );
};

export default Footer;
