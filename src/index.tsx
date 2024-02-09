import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';

const container = document.getElementById('root');
ReactDOM.createRoot(container as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
