import React from "react";

import { WrapperHeader } from "./components";
import MenuUser from "./MenuUser";

const Header: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <WrapperHeader>
        <MenuUser />
      </WrapperHeader>
    </React.Fragment>
  );
};

export default Header;
