import {
	correctOutcome,
	correctWord,
	incorrectOutcome,
	incorrectWord,
	outcome,
	wordText,
} from '@/components/Word/Word.css';
import { isSummaryWord } from '@/helpers';
import { MappedWord, SummaryWord } from '@/model';
import { Outcome } from '@/model/enums';
import { visuallyHidden } from '@/styles/theme.css';
import { useMemo } from 'react';

interface WordProps {
	word: SummaryWord | MappedWord;
}

export const Word = ({ word }: WordProps) => {
	const styles = useMemo(
		() => ({
			marginLeft: word.offset.left,
			marginTop: word.offset.top,
			marginRight: word.offset.right,
			marginBottom: word.offset.bottom,
		}),
		[word],
	);

	if (isSummaryWord(word)) {
		const shouldShowOutcome =
			word.outcome === Outcome.CORRECTLY_SELECTED || word.outcome === Outcome.INCORRECTLY_SELECTED;
		const isBadOutcome = word.outcome === Outcome.INCORRECTLY_SELECTED;

		return (
			<p
				className={`${wordText} ${
					!shouldShowOutcome ? '' : isBadOutcome ? incorrectWord : correctWord
				}`}
				style={styles}
			>
				{word.value}
				{shouldShowOutcome && (
					<span className={`${outcome} ${isBadOutcome ? incorrectOutcome : correctOutcome}`}>
						{isBadOutcome ? 'BAD' : 'GOOD'}
					</span>
				)}
			</p>
		);
	}

	return (
		<label className={wordText} style={styles}>
			<input className={visuallyHidden} type="checkbox" name="selectedWords" value={word.value} />
			<span>{word.value}</span>
		</label>
	);
};
