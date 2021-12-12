import { input } from '@/components/Input/Input.css';

interface InputProps {
	value?: string;
	placeholder?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	required?: boolean;
	'aria-label'?: string;
}

export const Input = (props: InputProps) => <input className={input} {...props} />;
