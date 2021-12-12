import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const layout = style({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	minHeight: '100vh',
	gap: vars.spacing.large,
	padding: vars.spacing.xlarge,
});
