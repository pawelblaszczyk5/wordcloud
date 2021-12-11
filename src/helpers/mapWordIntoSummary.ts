import { MappedWord, SummaryWord } from '@/model';
import { Outcome } from '@/model/enums';

const getOutcome = (
	word: string,
	selectedWords: Array<string>,
	answers: Array<string>,
): Outcome => {
	const isWordSelected = selectedWords.includes(word);
	const isWordAnswer = answers.includes(word);

	if (isWordSelected && isWordAnswer) return Outcome.CORRECTLY_SELECTED;
	if (isWordSelected && !isWordAnswer) return Outcome.INCORRECTLY_SELECTED;
	if (!isWordSelected && isWordAnswer) return Outcome.INCORRECTLY_UNSELECTED;
	return Outcome.CORRECTLY_UNSELECTED;
};

export const mapWordIntoSummary = (
	word: MappedWord,
	selectedWords: Array<string>,
	answers: Array<string>,
): SummaryWord => {
	return {
		...word,
		outcome: getOutcome(word.value, selectedWords, answers),
	};
};
