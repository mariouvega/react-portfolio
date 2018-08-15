import styled, { css } from 'styled-components';
import media from 'theme/media';

export const Div = styled.div`
	${({ marginBottom }) => marginBottom && css`
		margin-bottom: ${marginBottom};
	`}
	${({ marginLeft }) => marginLeft && css`
		margin-Left: ${marginLeft};
	`}
	${({ marginRight }) => marginRight && css`
		margin-Right: ${marginRight};
	`}
	${({ marginTop }) => marginTop && css`
		margin-Top: ${marginTop};
	`}
`

export const Container = styled(Div)`
	padding-left: 120px;
	padding-right: 120px;
	padding-top: 30px;
	
	${media.tablet`
		padding-left: 30px;
		padding-right: 30px;
		padding-top: 15px;
	`}
	${media.phone`
		padding-left: 10px;
		padding-right: 10px;
		padding-top: 15px;
	`}
`

export const ProjectContainer = styled(Div)`
	display: flex;
	{/*justify-content: space-between;*/}
`

export const Flex = styled(Div)`
	display: flex;

	${({ column }) => column && css`
		flex-direction: ${column};
	`}

	${({ justify }) => justify && css`
		justify-content: ${justify};
	`}

	${({ align }) => align && css`
		align-content: ${align};
	`}
`