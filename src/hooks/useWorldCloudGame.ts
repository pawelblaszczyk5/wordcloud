import { GameState } from '@/model/enums';
import { GameModel, Word } from '@/model';
import { useEffect, useRef, useState } from 'react';

export const useWorldCloudGame = (initialNickname: string) => {
	const nickname = useRef(initialNickname).current;
	const [game, setGame] = useState<GameModel<GameState>>({
		currentState: GameState.LOADING,
		model: null,
	});

	const changeGameStateToResult = useRef(() => {
		const newGame: GameModel<GameState.RESULT> = {
			currentState: GameState.RESULT,
			model: {
				score: 5,
				nickname,
			},
		};

		setGame(newGame);
	}).current;

	const changeGameStateToSummary = useRef((selectedWords: Array<Word['value']>) => {
		console.log(selectedWords);

		const newGame: GameModel<GameState.IN_PROGRESS> = {
			currentState: GameState.IN_PROGRESS,
			model: {
				words: [],
				question: '',
				progress: changeGameStateToResult,
			},
		};

		setGame(newGame);
	}).current;

	const changeGameStateToInProgress = useRef((words: Array<Word>) => {
		console.log(words);

		const newGame: GameModel<GameState.IN_PROGRESS> = {
			currentState: GameState.IN_PROGRESS,
			model: {
				words: words,
				question: '',
				progress: changeGameStateToSummary,
			},
		};

		setGame(newGame);
	}).current;

	const changeGameStateToError = useRef(() => {
		const newGame: GameModel<GameState.ERROR> = {
			currentState: GameState.ERROR,
			model: null,
		};

		setGame(newGame);
	}).current;

	const fetchWords = useRef(async () => {
		try {
			const x = await fetch('/api/words');

			console.log(x);

			changeGameStateToInProgress([]);
		} catch {
			changeGameStateToError();
		}
	});

	useEffect(() => {
		fetchWords.current();
	}, []);

	return game;
};
