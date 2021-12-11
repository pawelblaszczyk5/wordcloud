import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '@/App';
import { setupMockBackend } from '@/mocks';

import '@/styles.css';
import 'modern-normalize';

const renderAfterMockBackendSetup = async () => {
	await setupMockBackend();

	ReactDOM.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
		document.getElementById('root'),
	);
};

renderAfterMockBackendSetup();
