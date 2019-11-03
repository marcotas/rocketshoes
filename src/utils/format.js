import Intl from 'intl';
import 'intl/locale-data/jsonp/pt-BR';

const format = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format;

export const currency = number => format(number / 100);
