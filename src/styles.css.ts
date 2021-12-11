import { vars } from '@/styles/theme.css';
import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
	margin: 0,
});

globalStyle(':root', {
	height: '100%',
});

globalStyle('body', {
	background: vars.color.light.main,
	color: vars.color.dark.main,
	padding: vars.spacing.xlarge,
	lineHeight: '150%',
	width: '100%',
	height: '100%',
});

globalStyle('#root', {
	height: '100%',
});
