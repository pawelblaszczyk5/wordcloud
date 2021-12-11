import { vars } from '@/styles/theme.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const wordText = style({
	fontWeight: 'bold',
	color: vars.color.dark.main,
	userSelect: 'none',
	padding: vars.spacing.small,
	position: 'relative',
});

export const outcome = style({
	position: 'absolute',
	width: '100%',
	textAlign: 'center',
	left: 0,
	top: `calc(${vars.spacing.small} * -1)`,
});

export const correctOutcome = style({
	color: vars.color.feedback.success.secondary,
});

export const correctWord = style({
	color: vars.color.feedback.success.main,
});

export const incorrectOutcome = style({
	color: vars.color.feedback.error.secondary,
});

export const incorrectWord = style({
	color: vars.color.feedback.error.main,
});

globalStyle(`${wordText} > input:checked ~ span`, {
	color: vars.color.dark.secondary,
});
