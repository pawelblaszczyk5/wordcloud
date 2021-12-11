import { heading, paragraph } from '@/components/Result/Result.css';
import { pluralize } from '@/helpers/pluralize';
import { GameModel } from '@/model';
import { GameState } from '@/model/enums';

interface ResultProps {
	game: GameModel<GameState.RESULT>;
}

export const Result = ({
	game: {
		model: { nickname, score },
	},
}: ResultProps) => (
	<>
		<h1 className={heading}>
			Congratulations, {nickname}!<br />
			Your score:
		</h1>
		<p className={paragraph}>{pluralize(score, 'point', 'points')}</p>
	</>
);
