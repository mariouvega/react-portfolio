import { injectGlobal } from 'styled-components';
import { lightBlue, white, purple, grey, blue, black, blueTwo } from 'theme/variables';

injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=Varela+Round');

	body {
		font-family: 'Varela Round', sans-serif;
		font-size: 16px;
		color: ${black};
		background-color: ${white};
	}
`