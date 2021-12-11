import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const layout = style({
	display: 'flex',
	flexDirection: 'column',
	padding: '25vh 0',
	alignItems: 'center',
	height: '100%',
	gap: vars.spacing.large,
});
