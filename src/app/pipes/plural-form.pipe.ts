import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralForm',
  pure: true
})
export class PluralFormPipe implements PipeTransform {

  transform(value: number | string, firstForm: string, secondForm: string, thirdForm: string): string {
    const correctValue: number = Number(value);
    const lastTwoDigits: number = correctValue % 100;
    const lastDigit: number = correctValue % 10;
    const isException: boolean = lastTwoDigits >= 11 && lastTwoDigits <= 14;
    const endsWithOne: boolean = lastDigit === 1;
    const endsWithTwoToFour: boolean = lastDigit >= 2 && lastDigit <= 4;
    if (Number.isNaN(correctValue)) {
      return '';
    } 
    if (isException) {
      return firstForm;
    } 
    if (endsWithOne) {
      return secondForm;
    } 
    if (endsWithTwoToFour) {
      return thirdForm;
    } 
    return firstForm;
  }
}
