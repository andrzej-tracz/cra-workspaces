import {addParameters, configure} from '@storybook/react';
import {themes} from '@storybook/theming';

addParameters({
	options: {
		theme: themes.light
	}
});

const comps = require.context('@project/components/src', true, /.stories.js$/);

configure(() => {
	comps.keys().forEach(filename => comps(filename));
}, module);
