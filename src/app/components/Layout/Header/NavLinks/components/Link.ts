import styled from 'styled-components';
import { Link as MaterialLink } from '@material-ui/core';

const Link = styled(MaterialLink)`
	padding: 10px;
	font-size: 16px;
	line-height: 16px;
	color: #222222;

	&:hover {
		background-color: rgba(0, 0, 0, 0.04);
		text-decoration: none;
	}
`;

export default Link;
