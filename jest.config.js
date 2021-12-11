module.exports = {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	collectCoverageFrom: ['<rootDir>/src/**/*.ts', '<rootDir>/src/**/*.tsx'],
	coveragePathIgnorePatterns: ['<rootDir>/src/model/*'],
	coverageProvider: 'v8',
	moduleNameMapper: {
		'@/(.*)': '<rootDir>/src/$1',
	},
	transform: {
		'.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
		'\\.[jt]sx?$': 'babel-jest',
	},
};
