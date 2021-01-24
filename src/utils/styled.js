import Case from 'case';
import { css } from 'styled-components';

import { BREAKPOINTS } from '../constants/styled';

const forVariables = (obj, fn) => Object.entries(obj).map(fn).join('\n');

export const createColorVariables = (colors) =>
    forVariables(
        colors,
        ([name, value]) => `--color-${Case.kebab(name)}: ${value};`
    );

export const createSizeVariables = (sizes, varName) =>
    forVariables(
        sizes,
        ([name, percentage]) => `--${varName}-${name}: ${percentage}rem;`
    );

export const createPlainVariables = (variables, varName) =>
    forVariables(
        variables,
        ([name, value]) => `--${varName}-${name}: ${value};`
    );

const withMedia = (size, rules) => css`
    @media (min-width: ${BREAKPOINTS[size] || BREAKPOINTS.desktop}rem) {
        ${rules}
    }
`;

export const mediaDesktop = (rules) => withMedia('desktop', rules);
export const mediaDesktopXl = (rules) => withMedia('desktop-XL', rules);
export const mediaTablet = (rules) => withMedia('tablet', rules);

export const toREM = (size) => `calc(${size} / var(--font-size-px) * 1rem)`;
