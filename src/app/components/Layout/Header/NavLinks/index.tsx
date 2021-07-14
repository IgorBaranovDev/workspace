import React from "react";

// component
import LinkItem from './LinkItem';

// styles
import { NavLinksWrapper } from './components';

// types
import INavLinkData from '../types/INavLinkData';

interface INavLinksProps {
    navLinksData: Array<INavLinkData>
}

const NavLinks: React.FunctionComponent<INavLinksProps> = ({ navLinksData }) => {
    return (
        <React.Fragment>
            <NavLinksWrapper>
            {navLinksData.map((navLink) =>(
                <LinkItem
                    key={navLink.path}
                    label={navLink.label}
                    path={navLink.path}
                    />
            ))}
            </NavLinksWrapper>
        </React.Fragment>
    )
}

export default NavLinks;
