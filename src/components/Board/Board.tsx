import { GameModel } from '@/model';
import { GameState } from '@/model/enums';

export interface BoardProps {
	game: GameModel<GameState.IN_PROGRESS | GameState.SUMMARY>;
}

export const Board = ({ game }: BoardProps) => {
	console.log(game);

	return <h1>Hello</h1>;
};
