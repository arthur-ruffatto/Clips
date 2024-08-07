import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

export class EmailTaken implements AsyncValidator {
  constructor(private auth: AngularFireAuth) {
  }

  validate = (control: AbstractControl<any, any>): Promise<ValidationErrors | null> => {
    return this.auth.fetchSignInMethodsForEmail(control.value).then(
      response => {
        console.log(response)
        return response.length ? {EmailTaken: true} : null
      }
    );
  }
}
