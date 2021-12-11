import { input } from '@/components/Input/Input.css';

interface InputProps {
	value?: string;
	placeholder?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, onChange, placeholder }: InputProps) => (
	<input className={input} value={value} onChange={onChange} placeholder={placeholder} />
);
