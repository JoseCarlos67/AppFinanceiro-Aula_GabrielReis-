import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyBrl'
})
export class CurrencyBrlPipe implements PipeTransform {

  transform(value: number | string): string {
    if (value === null || value === undefined || value === '') {
      return 'R$ 0,00';
    }

    const numericValue = typeof value === 'string' ? parseFloat(value) : value;

    if (isNaN(numericValue)) {
      return 'R$ 0,00';
    }

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(numericValue);
  }

}
