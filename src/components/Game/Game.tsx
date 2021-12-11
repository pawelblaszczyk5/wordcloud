import { Board } from '@/components/Board';
import { ErrorMessage } from '@/components/ErrorMessage';
import { Loading } from '@/components/Loading';
import { Result } from '@/components/Result';
import {
	isGameStateError,
	isGameStateInProgress,
	isGameStateLoading,
	isGameStateResult,
	isGameStateSummary,
} from '@/helpers';
import { useWorldCloudGame } from '@/hooks';

interface GameProps {
	initialNickname: string;
}

export const Game = ({ initialNickname }: GameProps) => {
	const game = useWorldCloudGame(initialNickname);

	if (isGameStateLoading(game)) {
		return <Loading />;
	}

	if (isGameStateError(game)) {
		return <ErrorMessage />;
	}

	if (isGameStateInProgress(game) || isGameStateSummary(game)) {
		return <Board game={game} />;
	}

	if (isGameStateResult(game)) {
		return <Result game={game} />;
	}

	return null;
};
