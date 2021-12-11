import { GameState } from '@/model/enums';
import { GameModel, MappedWord, WordsFromApi } from '@/model';
import { useEffect, useRef, useState } from 'react';
import {
	calculateScore,
	generateOffset,
	isGameStateInProgress,
	isGameStateSummary,
	mapWordIntoSummary,
} from '@/helpers';

const createError = () => ({
	currentState: GameState.ERROR,
	model: null,
});

export const useWorldCloudGame = (initialNickname: string) => {
	const nickname = useRef(initialNickname).current;
	const [game, setGame] = useState<GameModel<GameState>>({
		currentState: GameState.LOADING,
		model: null,
	});

	const changeGameStateToResult = useRef(() => {
		setGame((game) => {
			if (!isGameStateSummary(game)) {
				return createError();
			}

			return {
				currentState: GameState.RESULT,
				model: {
					nickname,
					score: calculateScore(game.model.words),
				},
			};
		});
	}).current;

	const changeGameStateToSummary = useRef((selectedWords: Array<MappedWord['value']>) => {
		setGame((game) => {
			if (!isGameStateInProgress(game)) {
				return createError();
			}
			return {
				currentState: GameState.SUMMARY,
				model: {
					words: game.model.words.map((word) =>
						mapWordIntoSummary(word, selectedWords, game.model.answers),
					),
					question: game.model.question,
					answers: game.model.answers,
					progress: changeGameStateToResult,
				},
			};
		});
	}).current;

	const changeGameStateToInProgress = useRef(
		(allWorlds: Array<string>, goodWords: Array<string>, question: string) => {
			const newGame: GameModel<GameState.IN_PROGRESS> = {
				currentState: GameState.IN_PROGRESS,
				model: {
					words: allWorlds.map((word) => ({
						value: word,
						offset: generateOffset(),
					})),
					answers: goodWords,
					question: question,
					progress: changeGameStateToSummary,
				},
			};

			setGame(newGame);
		},
	).current;

	const fetchWords = useRef(async () => {
		try {
			const { question, all_words, good_words }: WordsFromApi = await (
				await fetch('/api/words')
			).json();

			changeGameStateToInProgress(all_words, good_words, question);
		} catch {
			setGame(createError());
		}
	});

	useEffect(() => {
		fetchWords.current();
	}, []);

	return game;
};
