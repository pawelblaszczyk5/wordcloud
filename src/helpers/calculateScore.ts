import { SummaryWord } from '@/model';
import { Outcome } from '@/model/enums';

export const calculateScore = (words: Array<SummaryWord>): number =>
	words.reduce((currentScore, { outcome }) => {
		switch (outcome) {
			case Outcome.CORRECTLY_SELECTED: {
				return currentScore + 2;
			}
			case Outcome.INCORRECTLY_SELECTED:
			case Outcome.INCORRECTLY_UNSELECTED: {
				return currentScore - 1;
			}
			case Outcome.CORRECTLY_UNSELECTED: {
				return currentScore;
			}
		}
	}, 0);
