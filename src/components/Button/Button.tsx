import { button } from '@/components/Button/Button.css';

interface ButtonProps {
	onClick?: () => void;
	children?: React.ReactNode;
	type?: 'submit' | 'button';
}

export const Button = ({ onClick, children, type }: ButtonProps) => (
	<button type={type} className={button} onClick={onClick}>
		{children ?? 'Click'}
	</button>
);
