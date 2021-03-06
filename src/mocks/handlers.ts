import { getRandomNumber } from '@/helpers';
import { WordsFromApi } from '@/model';
import { rest } from 'msw';

const POSSIBLE_QUIZES: Array<WordsFromApi> = [
	{
		question: 'select animals',
		all_words: [
			'hole',
			'sofa',
			'pear',
			'tiger',
			'oatmeal',
			'square',
			'nut',
			'cub',
			'shirt',
			'tub',
			'passenger',
			'cow',
		],
		good_words: ['tiger', 'cow'],
	},
	{
		question: 'select colors',
		all_words: [
			'jeans',
			'existence',
			'ink',
			'red',
			'blue',
			'yellow',
			'laugh',
			'behavior',
			'expansion',
			'white',
			'black',
			'cakes',
		],
		good_words: ['red', 'blue', 'yellow', 'white', 'black'],
	},
	{
		question: 'select vehicles',
		all_words: ['belief', 'wire', 'car', 'bus', 'star', 'river', 'hat', 'skirt', 'train'],
		good_words: ['car', 'bus', 'train'],
	},
];

export const handlers = [
	rest.get('/api/words', (_, res, ctx) => {
		if (import.meta.env.NODE_ENV === 'test') {
			return res(ctx.json(POSSIBLE_QUIZES[1]));
		}
		return res(
			ctx.delay(getRandomNumber(200, 800)),
			ctx.json(POSSIBLE_QUIZES[getRandomNumber(0, POSSIBLE_QUIZES.length - 1)]),
		);
	}),
];
