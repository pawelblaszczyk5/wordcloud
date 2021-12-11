import React from 'react';
import ReactDOM from 'react-dom';
import 'modern-normalize';
import { App } from '@/App';
import { setupMockBackend } from '@/mocks/worker';
import '@/styles.css';

await setupMockBackend();

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);
