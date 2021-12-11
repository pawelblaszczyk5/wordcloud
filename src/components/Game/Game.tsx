interface GameProps {
	initialNickname: string;
}

export const Game = ({ initialNickname }: GameProps) => <h1>Hello {initialNickname}</h1>;
