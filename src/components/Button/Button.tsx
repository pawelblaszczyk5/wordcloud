import { button } from '@/components/Button/Button.css';

interface ButtonProps {
	onClick?: () => void;
	children?: React.ReactNode;
	type?: 'submit' | 'button';
}

export const Button = (props: ButtonProps) => {
	const { children, ...propsToSpread } = props;

	return (
		<button className={button} {...propsToSpread}>
			{children ?? 'Click'}
		</button>
	);
};
