import { focus, vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const input = style([
	focus,
	{
		padding: `${vars.spacing.medium} ${vars.spacing.medium}`,
		fontSize: vars.fontSize.xxsmall,
		color: vars.color.dark.secondary,
		border: `${vars.color.dark.secondary} 1px solid`,
		borderRadius: '0.25rem',
		background: 'transparent',
		'::placeholder': {
			color: vars.color.light.secondary,
		},
	},
]);
