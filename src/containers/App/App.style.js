import styled from 'styled-components';
import { lightBlue, purple, grey, blue } from 'theme/variables';


export const Background = styled.div`
	position: fixed;
	left: 10vw;
	width: 80vw;
	top: 10vh;
	height: 80vh;
	// background-color: ${purple};
	background-image: url(${require('assets/body-background.jpg')});
	opacity: 0.4;
	background-size: 80%;
	background-repeat: no-repeat;
	background-position: center;
	z-index: -99;
`