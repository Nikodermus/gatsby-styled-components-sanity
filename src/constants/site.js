export const COLORS = {
    brandBlack: '#707070',
    brandYellow: '#E19B42',
    brandOrange: '#dd4e38',

    //  Neutrals
    black: '#292A2B',
    gray: '#BCBFC3',
    grayDark: '#444444',
    grayHighlight: '#F0F1F4',
    grayLight: '#E0E0E4',
    grayMedium: '#888B93',
    offWhite: '#F5F5F6',
    white: '#FFFFFF',
};

export const INFO = {
    address: 'REPLACE_ME',
    color: COLORS.brandOrange,
    description: `REPLACE_ME`,
    email: 'REPLACE_ME@gmail.com',
    googleMaps: 'REPLACE_ME',
    language: 'es-CO',
    name: 'REPLACE_ME',
    number: '57REPLACE_ME',
    URL: 'https://REPLACE_ME.com',
};

export const SOCIAL_MEDIA = {
    facebook: 'https://www.facebook.com/REPLACE_ME/',
    instagram: 'https://www.instagram.com/REPLACE_ME/',
    whatsapp: `https://wa.me/${INFO.number}?text=${encodeURI(
        INFO.description
    )}`,
};
