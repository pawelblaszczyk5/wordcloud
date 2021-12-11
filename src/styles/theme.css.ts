import { createGlobalTheme, style } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
	color: {
		dark: {
			main: '#2c3e50',
			secondary: '#34495e',
		},
		light: {
			main: '#f5f6fa',
			secondary: '#bdc3c7',
		},
		feedback: {
			error: {
				main: '#c0392b',
				secondary: '#e74c3c',
			},
			success: {
				main: '#27ae60',
				secondary: '#2ecc71',
			},
		},
		accent: {
			cold: {
				main: '#2980b9',
				secondary: '#3498db',
			},
			warm: {
				main: '#f39c12',
				secondary: '#f1c40f',
			},
		},
	},
	spacing: {
		xxsmall: '0.25em',
		xsmall: '0.5em',
		small: '0.75em',
		medium: '1em',
		large: '1.5em',
		xlarge: '2em',
		xxlarge: '2.5em',
	},
	fontSize: {
		xxsmall: '0.875rem',
		xsmall: '1rem',
		small: '1.125rem',
		medium: '1.25rem',
		large: '1.5rem',
		xlarge: '1.75rem',
		xxlarge: '2rem',
		huge: '3rem',
	},
});

export const focus = style({
	':focus-visible': {
		boxShadow: `0px 0px 1px 2px ${vars.color.accent.cold.main}`,
		outline: 'none',
	},
});
