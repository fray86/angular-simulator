import { Pipe, PipeTransform } from '@angular/core';
import { TelFormat } from '../../enums/TelFormat';

@Pipe({
  name: 'telTransform',
})
export class TelTransformPipe implements PipeTransform {

  transform(value: string, format: TelFormat) {
    const availableDigits: string = '0123456789';
    let currentPhone: string = '';
    for(const char of value) {
      if (availableDigits.includes(char) || char === '+') {
        currentPhone += char; 
      }
    } 
    if (format === TelFormat.COMPACT) 
      return currentPhone;
    if (format === TelFormat.INTERNATIONAL) {
      return `${currentPhone.slice(0,3)} ${currentPhone.slice(3,6)} ${currentPhone.slice(6,9)} ${currentPhone.slice(9,11)} ${currentPhone.slice(11,13)}`;
    } 
    if (format === TelFormat.NATIONAL) {
      return `${currentPhone.slice(3,6)} ${currentPhone.slice(6,9)} ${currentPhone.slice(9,11)} ${currentPhone.slice(11,13)}`;
    }
    if (format === TelFormat.MASKED) {
      return `${currentPhone.slice(0,3)} ${currentPhone.slice(3,6)} *** ** ${currentPhone.slice(11,13)}`;
    }
    return currentPhone;
  }
}
