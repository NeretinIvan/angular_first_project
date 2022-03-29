import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {
  transform(value: number, locale: 'ru-RU' | 'en-US'): unknown {
    return value.toLocaleString(locale);
  }
}
