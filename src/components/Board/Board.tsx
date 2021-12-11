import { board, form } from '@/components/Board/Board.css';
import { Button } from '@/components/Button';
import { Word } from '@/components/Word';
import { isGameStateInProgress } from '@/helpers';
import { GameModel } from '@/model';
import { GameState } from '@/model/enums';
import { useCallback, useRef } from 'react';

export interface BoardProps {
	game: GameModel<GameState.IN_PROGRESS | GameState.SUMMARY>;
}

export const Board = ({ game }: BoardProps) => {
	const formRef = useRef<null | HTMLFormElement>(null);

	const formSubmitHandler: React.FormEventHandler<HTMLFormElement> = useCallback(
		(e) => {
			e.preventDefault();

			if (isGameStateInProgress(game) && formRef.current) {
				const formData = new FormData(formRef.current);

				game.model.progress(formData.getAll('selectedWords') as Array<string>);
			}
		},
		[game],
	);

	return (
		<form ref={formRef} onSubmit={formSubmitHandler} className={form}>
			<h1>{game.model.question}</h1>
			<div className={board}>
				{game.model.words.map((word) => (
					<Word key={word.value} word={word} />
				))}
			</div>
			<Button>{isGameStateInProgress(game) ? 'check answers' : 'finish game'}</Button>
		</form>
	);
};
