import { errorMessage } from '@/components/ErrorMessage/ErrorMessage.css';

export const ErrorMessage = () => (
	<h1 className={errorMessage}>
		Sorry for inconvenience there was an error within our system 😢
		<br />
		Please refresh and try again!
	</h1>
);
