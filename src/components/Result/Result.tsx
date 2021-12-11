import { GameModel } from '@/model';
import { GameState } from '@/model/enums';

interface ResultProps {
	game: GameModel<GameState.RESULT>;
}

export const Result = ({ game }: ResultProps) => <h1>Wynik</h1>;
