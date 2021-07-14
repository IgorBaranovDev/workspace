import React from "react";

import { WrapperHeader } from "./components";
import MenuUser from "./MenuUser";
import NavLinks from "./NavLinks";

// types
import INavLinkData from "./types/INavLinkData";

// data
const NavLinksData: Array<INavLinkData> = [
  {
    label: 'link-1',
    path: '#',
  },
  {
    label: 'link-2',
    path: '#',
  },
  {
    label: 'link-3',
    path: '#',
  },
]

const Header: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <WrapperHeader>
        <NavLinks navLinksData={NavLinksData}/>
        <MenuUser />
      </WrapperHeader>
    </React.Fragment>
  );
};

export default Header;
