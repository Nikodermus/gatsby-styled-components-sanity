import { INFO } from '../constants/site';
import { phone } from '../constants/regex';

export const inRange = (num, min, max) => Math.max(Math.min(num, max), min);

export const formatNumber = (num, locale = INFO.language) =>
    Intl.NumberFormat(locale).format(num);

export const formatPhone = (num = INFO.phone) =>
    String(num).replace(phone, '+$1 $2 $3 $4');
