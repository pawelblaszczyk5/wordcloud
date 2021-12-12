import { App } from '@/App';
import userEvent from '@testing-library/user-event';
import { render, screen, within } from '@testing-library/react';
import { server } from '@/mocks/testServer';
import { rest } from 'msw';

const setup = (shouldEnterName = true) => {
	render(<App />);

	if (shouldEnterName)
		userEvent.type(screen.getByRole('textbox', { name: 'Enter your nickname…' }), 'nickname');
};

describe('Game tests', () => {
	test('should render welcome screen', () => {
		setup();

		expect(screen.getByRole('textbox', { name: 'Enter your nickname…' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'play' })).toBeInTheDocument();
		expect(screen.getByRole('heading', { level: 1, name: 'Wordcloud game' })).toBeInTheDocument();
	});

	test('should not be possible to process without entering nickname', () => {
		setup(false);

		expect(screen.getByRole('textbox', { name: 'Enter your nickname…' })).toBeRequired();

		userEvent.click(screen.getByRole('button', { name: 'play' }));

		expect(screen.queryByRole('img', { name: 'Loading…' })).not.toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'play' })).toHaveFocus();
	});

	test('loading screen should be visible while fetching game data', () => {
		setup();

		userEvent.click(screen.getByRole('button', { name: 'play' }));

		expect(screen.getByRole('img', { name: 'Loading…' })).toBeInTheDocument();
	});

	test('should handle error while fetching game data', async () => {
		setup();

		server?.use(rest.get('/api/words', (_, res, ctx) => res.once(ctx.json({}), ctx.status(500))));

		userEvent.click(screen.getByRole('button', { name: 'play' }));

		expect(
			await screen.findByRole('heading', {
				level: 1,
				name: 'Sorry for inconvenience there was an error within our system 😢 Please refresh and try again!',
			}),
		).toBeInTheDocument();
	});

	test('should be possible to start the game', async () => {
		setup();

		userEvent.click(screen.getByRole('button', { name: 'play' }));

		expect(
			await screen.findByRole('heading', { level: 1, name: 'select colors' }),
		).toBeInTheDocument();
	});

	test('should be possible to finish the game', async () => {
		setup();

		userEvent.click(screen.getByRole('button', { name: 'play' }));

		await screen.findByRole('heading', { level: 1, name: 'select colors' });

		userEvent.click(screen.getByRole('checkbox', { name: 'red' }));
		userEvent.click(screen.getByRole('checkbox', { name: 'blue' }));
		userEvent.click(screen.getByRole('checkbox', { name: 'yellow' }));
		userEvent.click(screen.getByRole('checkbox', { name: 'black' }));
		userEvent.click(screen.getByRole('checkbox', { name: 'ink' }));
		userEvent.click(screen.getByRole('button', { name: 'check answers' }));

		expect(within(screen.getByText('red')).getByText('GOOD')).toBeInTheDocument();
		expect(within(screen.getByText('blue')).getByText('GOOD')).toBeInTheDocument();
		expect(within(screen.getByText('yellow')).getByText('GOOD')).toBeInTheDocument();
		expect(within(screen.getByText('black')).getByText('GOOD')).toBeInTheDocument();
		expect(within(screen.getByText('ink')).getByText('BAD')).toBeInTheDocument();

		userEvent.click(screen.getByRole('button', { name: 'finish game' }));

		expect(
			screen.getByRole('heading', { level: 1, name: 'Congratulations, nickname! Your score:' }),
		).toBeInTheDocument();
		expect(screen.getByText('6 points')).toBeInTheDocument();
	});

	test('should be possible to start new game', async () => {
		setup();

		userEvent.click(screen.getByRole('button', { name: 'play' }));

		await screen.findByRole('heading', { level: 1, name: 'select colors' });
		userEvent.click(screen.getByRole('button', { name: 'check answers' }));
		userEvent.click(screen.getByRole('button', { name: 'finish game' }));
		userEvent.click(screen.getByRole('button', { name: 'play again' }));

		expect(
			await screen.findByRole('heading', { level: 1, name: 'select colors' }),
		).toBeInTheDocument();
	});

	test('should calculate score properly', async () => {
		setup();

		userEvent.click(screen.getByRole('button', { name: 'play' }));

		await screen.findByRole('heading', { level: 1, name: 'select colors' });
		userEvent.click(screen.getByRole('checkbox', { name: 'red' }));
		userEvent.click(screen.getByRole('checkbox', { name: 'blue' }));
		userEvent.click(screen.getByRole('checkbox', { name: 'yellow' }));
		userEvent.click(screen.getByRole('checkbox', { name: 'ink' }));
		userEvent.click(screen.getByRole('checkbox', { name: 'cakes' }));
		userEvent.click(screen.getByRole('checkbox', { name: 'expansion' }));
		userEvent.click(screen.getByRole('button', { name: 'check answers' }));
		userEvent.click(screen.getByRole('button', { name: 'finish game' }));

		expect(screen.getByText('1 point')).toBeInTheDocument();
	});
});
