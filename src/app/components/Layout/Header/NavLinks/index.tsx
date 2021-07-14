import React from "react";

// types
import INavLinkData from '../types/INavLinkData';

// styles
import { NavLinksWrapper } from './components';

// component
import LinkItem from './LinkItem';

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
