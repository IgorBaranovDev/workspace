import React from "react";

// compoments
import Logo from "./Logo";
import MenuUser from "./MenuUser";

// styles
import { WrapperHeader } from "./components";

// types
// import INavLinkData from "./types/INavLinkData";

// data
// const NavLinksData: Array<INavLinkData> = [
//   {
//     label: 'link-1',
//     path: '#',
//   },
//   {
//     label: 'link-2',
//     path: '#',
//   },
//   {
//     label: 'link-3',
//     path: '#',
//   },
// ]

const Header: React.FunctionComponent = () => (
  <WrapperHeader>
    <Logo />
    {/* <NavLinks navLinksData={NavLinksData}/> */}
    <MenuUser />
  </WrapperHeader>
);

export default Header;
