import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export class RegisterValidators {
  static match(controlName: string, matchingControlName: string) : ValidatorFn {
    return (group: AbstractControl) : ValidationErrors | null => {
      const control = group.get(controlName);
      const matchingControl = group.get(matchingControlName);

      if (!matchingControl || !control) {
        console.log('Controls could not be found in the form')
        return { controlNotFound: false }
      }

      const error =  control.value === matchingControl.value ? null : {noMatch: true}

      matchingControl.setErrors(error);

      return error;
    }
  }
}
