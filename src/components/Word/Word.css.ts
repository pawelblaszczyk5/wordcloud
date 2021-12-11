import { vars } from '@/styles/theme.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const label = style({
	fontWeight: 'bold',
	color: vars.color.dark.secondary,
	userSelect: 'none',
	padding: vars.spacing.small,
});

globalStyle(`${label} > input:checked ~ span`, {
	color: vars.color.dark.main,
});
