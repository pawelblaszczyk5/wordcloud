import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { setupMockBackend } from './mocks/worker';

await setupMockBackend();

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);
