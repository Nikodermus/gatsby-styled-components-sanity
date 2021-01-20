import { useEffect, useState } from 'react';

import { INFO } from '../constants/site';
import { useMediaChange } from './context';

export const useClickOutside = (ref, callback) => {
    const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    });
};

export const useScrollDisabled = () => {
    const [cancelScroll, setScroll] = useState(false);

    useEffect(() => {
        document.documentElement.style.overflow = cancelScroll ? 'hidden' : '';
    }, [cancelScroll]);

    return setScroll;
};

export const useWhatsappMessage = (text = INFO.description) => {
    const [message, setMessage] = useState('');
    const { isMobile } = useMediaChange();
    const parsedText = encodeURI(text);

    useEffect(() => {
        setMessage(
            isMobile
                ? `https://wa.me/${INFO.number}?text=${parsedText}`
                : `https://web.whatsapp.com/send?phone=${INFO.number}&text=${parsedText}`
        );
    }, [isMobile, parsedText]);

    return message;
};
