import Case from 'case';
import chalk from 'chalk';

export const subFolders = ['atoms', 'molecules', 'organisms', 'templates'];

export const getParams = () => {
    const [_, __, ...preRoute] = process.argv;

    if (!preRoute.length) {
        console.log(chalk.red('You need to pass a route parameter'));
        process.exit(1);
    }

    const route = preRoute.map(Case.pascal).join('');
    const dir = `./src/components/${route}`;
    const file = `./src/pages/${Case.kebab(route)}.jsx`;

    return { route, dir, file };
};
