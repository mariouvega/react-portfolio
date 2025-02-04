import { css } from 'styled-components';

const sizes = {
	phone: 414,
	tablet: 768,
	desktop: 992,
	giant: 1170
}

const media = Object.keys(sizes).reduce((finalMedia, size) => {
	return {
		...finalMedia,
		[size]: function(...args) {
			return css`
				@media(max-width: ${sizes[size]}px) {
					${css(...args)}
				}
			`
		}
	}
}, {})

// A skeleton of what it once was
// function phone(...args) {
// 	return css`
// 		@media(max-width: ${sizes.phone}px) {
// 			${css(...args)}
// 		}
// 	`
// }

export default media;