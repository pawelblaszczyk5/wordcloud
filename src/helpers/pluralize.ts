const intlPluralRules = new Intl.PluralRules('en-US');

export const pluralize = (count: number, singularForm: string, pluralForm: string): string =>
	`${count} ${intlPluralRules.select(count) === 'one' ? singularForm : pluralForm}`;
