import { style } from '@vanilla-extract/css';
import { focus, vars } from '@/styles/theme.css';

export const button = style([
	focus,
	{
		padding: `${vars.spacing.xsmall} ${vars.spacing.large}`,
		border: `${vars.color.accent.cold.main} 1px solid`,
		background: 'transparent',
		color: vars.color.accent.cold.main,
		fontSize: vars.fontSize.medium,
		borderRadius: '0.25rem',
		':hover': {
			background: vars.color.accent.cold.secondary,
			color: vars.color.light.main,
		},
	},
]);
