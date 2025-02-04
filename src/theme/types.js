// Here we are going to put the styles for tag elements
import styled from 'styled-components';
import { purple, black, grey, blueTwo, white, lightBlue } from 'theme/variables'

export const Link = styled.a`
	color: ${blueTwo};
	text-decoration: none;
	position: relative;

	&:after {
		content: ' ';
		position: absolute;
		left: 0;
		bottom: 0;
		height: 10%;
		width: 100%;
		background-color: ${blueTwo};
		z-index: -1;
		transition: height .3s, background-color .3s;
	}

	&:hover:after {
		height: 40%;
		background-color: ${purple};
	}
`