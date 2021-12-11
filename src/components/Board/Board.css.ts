import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const board = style({
	display: 'flex',
	flexWrap: 'wrap',
	border: `1px solid ${vars.color.dark.main}`,
	borderRadius: '0.25rem',
	padding: vars.spacing.xlarge,
	width: '80vw',
	maxWidth: '800px',
	justifyContent: 'center',
});

export const form = style({
	display: 'flex',
	flexDirection: 'column',
	gap: vars.spacing.large,
	alignItems: 'center',
});
