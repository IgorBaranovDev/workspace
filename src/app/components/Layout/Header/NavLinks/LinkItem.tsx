import React from 'react';

import INavLinkData from '../types/INavLinkData';

// styles
import { Link, LinkItemWrapper } from './components';

type ILinkItemProps = INavLinkData;

const LinkItem: React.FunctionComponent<ILinkItemProps> = ({ label, path }) => (
	<LinkItemWrapper>
		<Link href={path}>{label}</Link>
	</LinkItemWrapper>
);

export default LinkItem;
