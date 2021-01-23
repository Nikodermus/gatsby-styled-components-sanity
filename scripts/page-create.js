import chalk from 'chalk';
import fs from 'fs';

import { subFolders, getParams } from './utils';

const { dir, route, file } = getParams();

if (fs.existsSync(dir)) {
    console.log(
        chalk.red('The route you are trying to create already exists.')
    );
    process.exit(1);
}

subFolders.forEach((f) => {
    const fullFolder = `${dir}/${f}`;
    fs.mkdirSync(fullFolder, { recursive: true });
    fs.writeFileSync(`${fullFolder}/.gitkeep`, '\n');
});

if (fs.existsSync(file)) {
    console.log(chalk.red('It already exists a page with that name.'));
    process.exit(1);
}

fs.writeFileSync(
    file,
    `import React from 'react';
import SEO from '../components/Library/atoms/SEO';

const ${route} = () => (
    <>
        <div>Welcome to ${route}!</div>
        <SEO title="${route}"></SEO>
    </>
);

export default ${route};
`
);
