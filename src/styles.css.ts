import { vars } from '@/styles/theme.css';
import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
	margin: 0,
});

globalStyle('body', {
	background: vars.color.light.main,
	color: vars.color.dark.main,
	padding: vars.spacing.xlarge,
	lineHeight: '150%',
	position: 'fixed',
	height: '100%',
	width: '100%',
});

globalStyle('#root', {
	height: '100%',
});
