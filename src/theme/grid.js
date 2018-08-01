import styled, { css } from 'styled-components';

export const Div = styled.div`
	${({ marginBottom }) => marginBottom && css`
		margin-bottom: ${marginBottom};
	`}
`

export const Container = styled(Div)`
	padding-left: 120px;
	padding-right: 120px;
	padding-top: 30px;
`

export const ProjectContainer = styled(Div)`
	display: flex;
	justify-content: space-between;
`

export const Flex = styled(Div)`
	display: flex;

	${({ column }) => column && css`
		flex-direction: column;
	`}

	${({ justify }) => justify && css`
		justify-content: justify;
	`}

	${({ align }) => align && css`
		align-content: align;
	`}
`