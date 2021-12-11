import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const heading = style({
	fontSize: vars.fontSize.huge,
	textAlign: 'center',
});

export const form = style({
	display: 'flex',
	flexDirection: 'column',
	gap: vars.spacing.large,
	alignItems: 'center',
});
