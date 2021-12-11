import { App } from '@/App';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

describe('App tests', () => {
	test('boilerplate', async () => {
		render(<App />);

		userEvent.click(screen.getByRole('button', { name: 'play' }));

		await screen.findByRole('button');
		screen.debug();
	});
});
