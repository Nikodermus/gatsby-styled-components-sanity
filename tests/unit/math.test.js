import { formatNumber, formatPhone, inRange } from '../../src/utils/math';

describe('inRange', () => {
    it('forces a number under a minimum', () => {
        expect(inRange(0, 10, 20)).toBe(10);
    });

    it('forces a number above a maximum', () => {
        expect(inRange(100, 10, 20)).toBe(20);
    });

    it("lets a number untouched if it's between a range", () => {
        expect(inRange(15, 10, 20)).toBe(15);
    });
});

describe('formatNumber', () => {
    it('formats different quantites with the same locale', () => {
        const curriedFormat = (num) => formatNumber(num, 'es-CO');

        expect(curriedFormat(100)).toBe('100');
        expect(curriedFormat(10000)).toBe('10,000');
        expect(curriedFormat(1113000)).toBe('1,113,000');
        expect(curriedFormat(12300)).toBe('12,300');
    });

    it('formats the same quanty with different locales', () => {
        const curriedFormat = (locale) => formatNumber(1222333, locale);

        expect(curriedFormat('en-IN')).toBe('1,222,333');
        expect(curriedFormat('es-CO')).toBe('1,222,333');
        expect(curriedFormat('jp')).toBe('1,222,333');
    });
});

describe('formatPhone', () => {
    it('formats a phone into its groups', () => {
        expect(formatPhone('573108658194')).toBe('+57 310 865 8194');
    });
});
