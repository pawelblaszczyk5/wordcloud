import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const heading = style({
	fontSize: vars.fontSize.xlarge,
	textAlign: 'center',
});

export const paragraph = style({
	fontSize: vars.fontSize.medium,
	textAlign: 'center',
	color: vars.color.accent.cold.main,
});
