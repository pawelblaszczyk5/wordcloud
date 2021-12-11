import { GameModel } from '@/model';
import { GameState } from '@/model/enums';

export const isGameStateInProgress = (
	game: GameModel<GameState>,
): game is GameModel<GameState.IN_PROGRESS> => game.currentState === GameState.IN_PROGRESS;

export const isGameStateSummary = (
	game: GameModel<GameState>,
): game is GameModel<GameState.SUMMARY> => game.currentState === GameState.SUMMARY;

export const isGameStateLoading = (
	game: GameModel<GameState>,
): game is GameModel<GameState.LOADING> => game.currentState === GameState.LOADING;

export const isGameStateError = (game: GameModel<GameState>): game is GameModel<GameState.ERROR> =>
	game.currentState === GameState.ERROR;

export const isGameStateResult = (
	game: GameModel<GameState>,
): game is GameModel<GameState.RESULT> => game.currentState === GameState.RESULT;
