import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCardNumber'
})
export class FormatCardNumberPipe implements PipeTransform {
  public transform(value: string): string {
    value = `
      ${value.slice(0, 4)} 
      ${value.slice(4, 8)} 
      ${value.slice(8, 12)} 
      ${value.slice(12, 16)}`;
    return value;
  }
}
