import { vars } from '@/styles/theme.css';
import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
	margin: 0,
});

globalStyle('body', {
	background: vars.color.light.main,
	color: vars.color.dark.main,
	lineHeight: 1.5,
	width: '100%',
});
