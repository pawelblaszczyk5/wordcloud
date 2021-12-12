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
	answers: Array<string>;
	words: Array<State extends GameState.IN_PROGRESS ? MappedWord : SummaryWord>;
	progress: State extends GameState.IN_PROGRESS
		? (answers: Array<MappedWord['value']>) => void
		: () => void;
}

interface ResultModel {
	score: number;
	nickname: string;
	progress: () => void;
}

interface BaseWord {
	value: string;
}
interface MappedWord extends BaseWord {
	offset: Offset;
}

interface Offset {
	top: string;
	left: string;
	bottom: string;
	right: string;
}

interface SummaryWord extends MappedWord {
	outcome: Outcome;
}

export type {
	GameModel,
	ProgressToGameResultHandler,
	ProgressToGameSummaryHandler,
	MappedWord,
	BaseWord,
	SummaryWord,
	Offset,
};
