import { getRandomNumber } from '@/helpers';
import { Offset } from '@/model';

const getRandomSingleOffset = (vertical = false): string =>
	`${getRandomNumber(vertical ? 1 : 2, vertical ? 6 : 4)}${vertical ? 'vh' : 'vw'}`;

export const generateOffset = (): Offset => ({
	top: getRandomSingleOffset(true),
	bottom: getRandomSingleOffset(true),
	left: getRandomSingleOffset(),
	right: getRandomSingleOffset(),
});
