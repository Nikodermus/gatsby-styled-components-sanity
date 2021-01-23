import React from 'react';

import { ContextProvider } from './src/utils/context';
import Layout from './src/components/Library/molecules/Layout';

import './static/fonts/fonts.css';

export const wrapPageElement = ({ element, props }) => (
    <Layout {...props}>{element}</Layout>
);

export const wrapRootElement = ({ element }) => (
    <ContextProvider>{element}</ContextProvider>
);
