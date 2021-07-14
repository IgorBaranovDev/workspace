import styled from 'styled-components';

const WrapperHeader = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	position: fixed;
	width: 100%;
	height: 40px;
	top: 0;
	left: 0;
	background-color: #2a9cff;
	z-index: 10;
`;

export default WrapperHeader;
