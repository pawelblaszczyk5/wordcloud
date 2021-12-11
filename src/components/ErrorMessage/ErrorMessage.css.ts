import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const errorMessage = style({
	fontSize: vars.fontSize.xlarge,
	maxWidth: '600px',
	textAlign: 'center',
});
