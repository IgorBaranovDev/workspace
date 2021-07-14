import React from 'react';

// styles
import { Link, LinkItemWrapper } from './components';

// types
import INavLinkData from '../types/INavLinkData';

type ILinkItemProps = INavLinkData;

const LinkItem: React.FunctionComponent<ILinkItemProps> = ({ label, path }) => (
	<LinkItemWrapper>
		<Link href={path}>{label}</Link>
	</LinkItemWrapper>
);

export default LinkItem;
