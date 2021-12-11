import { Button } from '@/components/Button';
import { Game } from '@/components/Game';
import { Input } from '@/components/Input';
import { form, heading } from '@/components/WelcomeScreen/WelcomeScreen.css';
import { useCallback, useState } from 'react';

export const WelcomeScreen = () => {
	const [nickname, setNickname] = useState('');
	const [gameInProgress, setGameInProgress] = useState(false);

	const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
		(e) => setNickname(e.currentTarget.value),
		[],
	);

	const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = useCallback((e) => {
		e.preventDefault();
		setGameInProgress(true);
	}, []);

	if (gameInProgress) {
		return <Game initialNickname={nickname} />;
	}

	return (
		<>
			<h1 className={heading}>Wordcloud game</h1>
			<form onSubmit={handleFormSubmit} className={form}>
				<Input
					value={nickname}
					onChange={handleInputChange}
					placeholder="Enter your nickname…"
					required
				/>
				<Button>play</Button>
			</form>
		</>
	);
};
