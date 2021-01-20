import { phone } from '../constants/regex';

export const roundToNearest = (x, increment = 1) =>
    Math.round(x / increment) * increment;

export const inRange = (num, min, max) => Math.max(Math.min(num, max), min);

export const formatMoney = (n) => Intl.NumberFormat('es-CO').format(n);

export const formatPhone = (n) => String(n).replace(phone, '+$1 $2 $3 $4');
