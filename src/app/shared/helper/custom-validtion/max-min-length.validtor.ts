import { AbstractControl, ValidatorFn } from '@angular/forms';

export class customValidationService {
  static checkLimit(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: any } | null => {
      if (c.value) {
        if (c.value?.toString()?.length < min || c.value?.toString()?.length > max) {
          return { 'range': true , 'min': min, 'max':max };
        }
      }
      return null;
    };
  }
}
