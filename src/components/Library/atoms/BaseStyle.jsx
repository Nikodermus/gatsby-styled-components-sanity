import { createGlobalStyle } from 'styled-components';

import {
    createColorVariables,
    createPlainVariables,
    createSizeVariables,
    toREM,
} from '../../../utils/styled';
import {
    BORDER_RADIUS,
    BREAKPOINTS,
    COLORS_THIRD_PARTY,
    FONT_FAMILIES,
    FONT_SIZE_BASE_PX,
    FONT_SIZES,
    FONT_WEIGHTS,
    LINE_HEIGHT,
    SIZINGS,
    TRANSITION,
    Z_INDEX,
} from '../../../constants/styled';
import { COLORS } from '../../../constants/site';

const BaseStyle = createGlobalStyle`
    :root{
        ${createColorVariables(COLORS)}

        ${createSizeVariables(BREAKPOINTS, 'breakpoint')}
        ${createSizeVariables(FONT_SIZES, 'font-size')}
        ${createSizeVariables(SIZINGS, 'sizing')}

        ${createPlainVariables(BORDER_RADIUS, 'border-radius')}
        ${createPlainVariables(COLORS_THIRD_PARTY, 'color-third-party')}
        ${createPlainVariables(FONT_FAMILIES, 'font-family')}
        ${createPlainVariables(FONT_WEIGHTS, 'font-weight')}
        ${createPlainVariables(LINE_HEIGHT, 'line-height')}
        ${createPlainVariables(TRANSITION, 'transition')}
        ${createPlainVariables(Z_INDEX, 'z-index')}

        --font-size-px: ${FONT_SIZE_BASE_PX};
        --box: ${toREM(1000)};
    }

    html{
        font-size: ${FONT_SIZE_BASE_PX}px;
    }

    body{
        font-size: var(--font-size-LG);
    }

    html, body{
        color: var(--color-brand-black);
        font-family: var(--font-family-main);
        max-width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
        width: 100%;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        color: inherit;
        font-size: inherit;
        list-style: none;
        margin: 0;
        padding: 0;
        transition: all 0.3s ease-in-out;

        &:focus,
        &:outline,
        &::-moz-focus-outer {
            outline: 0;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: var(--font-family-title);
        font-weight: var(--font-weight-bld);
    }


    img,
    picture,
    svg,
    video {
        max-width: 100%;
        object-fit: contain;
    }

    button,
    input,
    a,
    textarea {
        background: transparent;
        border-radius: 0;
        border: 0;
        outline: 0;

        &:hover {
            cursor: pointer;
            outline: 0;
        }
    }

    a,
    a:visited,
    a:focus {
        color: inherit;
        text-decoration: none;

        &:hover {
            color: inherit;
            cursor: pointer;
            text-decoration: none;
        }
    }
`;

export default BaseStyle;
