import React from 'react';

// styles
import { Link, LinkItemWrapper } from './components';

// types
import INavLinkData from '../types/INavLinkData';

const LinkItem: React.FC<INavLinkData> = ({ label, path }) => (
	<LinkItemWrapper>
		<Link href={path}>{label}</Link>
	</LinkItemWrapper>
);

export default LinkItem;
