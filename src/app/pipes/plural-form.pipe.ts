import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralForm',
  pure: true
})
export class PluralFormPipe implements PipeTransform {

  transform(value: number | string, firstForm: string, secondForm: string, thirdForm: string): string {
    const correctValue: number = Number(value);
    if (Number.isNaN(correctValue)) {
      return '';
    } if ((correctValue % 100 >= 11) && (correctValue % 100 <= 14)) {
      return firstForm;
    } if (correctValue % 10 === 1) {
      return secondForm;
    } if ((correctValue % 10 >= 2) && (correctValue % 10 <= 4)) {
      return thirdForm;
    } 
    return firstForm;
  }

}
