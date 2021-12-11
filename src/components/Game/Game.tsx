import { useWorldCloudGame } from '@/hooks';

interface GameProps {
	initialNickname: string;
}

export const Game = ({ initialNickname }: GameProps) => {
	const game = useWorldCloudGame(initialNickname);

	console.log(game);

	return <h1>Hello {initialNickname}</h1>;
};
