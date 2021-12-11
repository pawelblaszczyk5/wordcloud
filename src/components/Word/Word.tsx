import { label } from '@/components/Word/Word.css';
import { isSummaryWord } from '@/helpers';
import { MappedWord, SummaryWord } from '@/model';
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
		return <p style={styles}>{word.value}</p>;
	}

	return (
		<label className={label} style={styles}>
			<input className={visuallyHidden} type="checkbox" name="selectedWords" value={word.value} />
			<span>{word.value}</span>
		</label>
	);
};
