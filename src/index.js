import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';
import './theme/globalStyle';
import { AppContainer } from 'react-hot-loader';

ReactDOM.render(
	<AppContainer>
		{routes}
	</AppContainer>, document.getElementById('root'));
registerServiceWorker();

// Hot Mudule Replacement API
if (module.hot) {
	module.hot.accept('./routes', () => {
		const routes = require('./routes').default
		ReactDOM.render(
			<AppContainer>
				{routes}
			</AppContainer>,
			document.getElementById('root')
			);
	});
}