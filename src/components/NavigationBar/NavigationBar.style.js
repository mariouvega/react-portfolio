import styled from 'styled-components';
import { Flex, Div } from 'theme/grid';
import { blue, white, purple } from 'theme/variables';
import { Link } from 'react-router';

export const NavigationContainer = styled(Flex)`
	position: fixed;
	right: 2em;
	top: 1em;
`;

export const NavItem =styled(Link)`
	margin-right: 30px;
	font-size: 1em;
	cursor: pointer;
	color: ${blue};
	popsition: relative;
	text-decoration: none;
	
	&:hover {
		color: ${white};
		&::after {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background: ${purple};
			z-index: -1;
			transform: scale(1.3);
		}
	}
`;