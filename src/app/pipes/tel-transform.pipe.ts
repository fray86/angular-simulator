import { Pipe, PipeTransform } from '@angular/core';
import { TelFormat } from '../../enums/TelFormat';

@Pipe({
  name: 'telTransform',
})
export class TelTransformPipe implements PipeTransform {

  transform(value: string, format: TelFormat): string {
    const availableDigits: string = '0123456789';
    let currentPhone: string = '';
    for(const char of value) {
      if (availableDigits.includes(char) || char === '+') {
        currentPhone += char; 
      }
    } 
    switch (format) {
      case TelFormat.COMPACT:
        return currentPhone;
      case TelFormat.INTERNATIONAL:
        return `${ currentPhone.slice(0,3) } ${ currentPhone.slice(3,6) } ${ currentPhone.slice(6,9) } ${ currentPhone.slice(9,11) } ${ currentPhone.slice(11,13) }`;
      case TelFormat.NATIONAL:
        return `${ currentPhone.slice(3,6) } ${ currentPhone.slice(6,9) } ${ currentPhone.slice(9,11) } ${ currentPhone.slice(11,13) }`;
      case TelFormat.MASKED:
        return `${ currentPhone.slice(0,3) } ${ currentPhone.slice(3,6) } *** ** ${ currentPhone.slice(11,13) }`;
      default:
        return currentPhone;
    }
  }
}
