module.exports = {
    extends: [
        './rules/errors.json',
        './rules/best-practices.json',
        './rules/variables.json',
        './rules/style.json',
        './rules/es6.json'
    ],
    env: {
    	'browser': true,
    	'jquery': true
    },
    globals: {
    	PluginsCollection: 'readonly',
    	StateManager: 'readonly',
    	StorageManager: 'readonly',
    	CSRF: 'readonly',
    	controller: 'readonly',
    	snippets: 'readonly',
    	themeConfig: 'readonly',
    	lastSeenProductsConfig: 'readonly',
    	csrfConfig: 'readonly',
    }
};
