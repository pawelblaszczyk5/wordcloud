import { GameState, Outcome } from '@/model/enums';

interface GameModel<State extends GameState> {
	currentState: State;
	model: State extends GameState.LOADING | GameState.ERROR
		? null
		: State extends GameState.IN_PROGRESS | GameState.SUMMARY
		? SharedModel<State>
		: ResultModel;
}

type ProgressToGameSummaryHandler = SharedModel<GameState.IN_PROGRESS>['progress'];
type ProgressToGameResultHandler = SharedModel<GameState.SUMMARY>['progress'];

interface SharedModel<State extends GameState.IN_PROGRESS | GameState.SUMMARY> {
	question: string;
	words: Array<State extends GameState.IN_PROGRESS ? Word : CheckedWord>;
	progress: State extends GameState.IN_PROGRESS
		? (answers: Array<Word['value']>) => void
		: () => void;
}

interface ResultModel {
	score: number;
	nickname: string;
}

interface Word {
	value: string;
}

interface CheckedWord extends Word {
	correct: Outcome;
}

export type { GameModel, ProgressToGameResultHandler, ProgressToGameSummaryHandler, Word };
