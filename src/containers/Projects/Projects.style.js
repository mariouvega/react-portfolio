import styled from 'styled-components';
import { purple } from 'theme/variables'

export const ThumbnailBtn = styled.div`
	cursor: pointer;
	overflow: hidden;
	display: inline-block;
	{/* Nice and Suttle BOx Shadow */}
	{/* box-shadow: -5px 10px 19px -2px rgba(0,0,0,0.36); */}

	& > img {
		transition: transform .3s;
	}

	&:hover {
		& > img {
			transform: scale(1.3);
		}
	}
`

export const ProjectDiv = styled.div`
	padding: 20px;
	box-sizing: border-box;
	width: 30%;
	flex-basis: 37%;
`

export const Image = styled.img`
	width: auto;
	margin-left: auto;
	margin-right: auto;
`

export const Title = styled.h1`
	color: ${purple};
	margin-top: 0px;
	font-weight: 900;
	font-size: 2em;
	margin-left: auto;
	margin-right: auto;
`