module.exports = {
    root: true,
    extends: ['wesbos'],
    rules: {
        'no-unused-vars': [
            'error',
            {
                ignoreRestSiblings: true,
                varsIgnorePattern: '^_',
                argsIgnorePattern: '^_',
            },
        ],
        'prettier/prettier': [
            'error',
            {
                arrowParens: 'always',
                bracketSpacing: true,
                endOfLine: 'lf',
                printWidth: 80,
                semi: true,
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'es5',
                useTabs: false,
            },
        ],
        'react/prop-types': ['warn', { ignore: 'children' }],
    },
    overrides: [
        {
            files: ['**/tests/**/*', '**/scripts/**/*'],
            rules: {
                'import/no-extraneous-dependencies': [
                    'error',
                    { devDependencies: true },
                ],
            },
        },
    ],
};
