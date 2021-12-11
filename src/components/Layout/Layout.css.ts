import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const layout = style({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100%',
	gap: vars.spacing.large,
});
