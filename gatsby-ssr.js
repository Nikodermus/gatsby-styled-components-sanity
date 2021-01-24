import React from 'react';

import { ContextProvider } from './src/utils/context';

export const wrapRootElement = ({ element }) => (
    <ContextProvider>{element}</ContextProvider>
);
