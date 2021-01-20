import React, {
    createContext,
    useCallback,
    useContext,
    useLayoutEffect,
    useReducer,
    useState,
} from 'react';
import debounce from 'lodash.debounce';

import { BREAKPOINTS } from '../constants/styled';

const MediaContext = createContext();
const InfoContext = createContext();

const initialState = {};

export const ACTION_TYPES = {
    RESET: 'RESET',
};

const reducer = (state, { type }) => {
    switch (type) {
        case ACTION_TYPES.RESET: {
            return { ...initialState };
        }

        default: {
            return state;
        }
    }
};

const InfoProvider = ({ children }) => {
    const contextReducer = useReducer(reducer, initialState);

    return (
        <InfoContext.Provider value={contextReducer}>
            {children}
        </InfoContext.Provider>
    );
};

const mediaSize = `(min-width: ${BREAKPOINTS.desktop}rem)`;

const MediaProvider = ({ children }) => {
    const [isDesktop, setIsDesktop] = useState(false);

    const sizeChanged = useCallback(() => {
        const isNowDesktop = window.matchMedia(mediaSize).matches;
        if (isNowDesktop !== isDesktop) {
            setIsDesktop(isNowDesktop);
        }
    }, [isDesktop]);

    const debouncedSizeChange = debounce(sizeChanged, 200);

    useLayoutEffect(() => {
        sizeChanged();
        window.addEventListener('resize', debouncedSizeChange);

        return () => window.removeEventListener('resize', debouncedSizeChange);
    }, [debouncedSizeChange, sizeChanged]);

    return (
        <MediaContext.Provider value={{ isDesktop, isMobile: !isDesktop }}>
            {children}
        </MediaContext.Provider>
    );
};

export const useGlobalContext = () => useContext(InfoContext);
export const useMediaChange = () => useContext(MediaContext);

export const ContextProvider = ({ children }) => (
    <InfoProvider>
        <MediaProvider>{children}</MediaProvider>
    </InfoProvider>
);
