import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import IUser from "../../models/user.model";
import {RegisterValidators} from "../validators/register-validators";
import { EmailTaken } from "../validators/email-taken";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private auth: AuthService, private emailTaken: EmailTaken) {}

  inSubmission = false;

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ])
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ], [this.emailTaken.validate])
  age = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(18),
    Validators.max(120)
  ])
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ])
  confirmPassword = new FormControl('', [
    Validators.required,
  ])
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(15),
    Validators.maxLength(15)
  ])

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirmPassword: this.confirmPassword,
    phoneNumber: this.phoneNumber,
  }, [RegisterValidators.match('password', 'confirmPassword')])

  alert = false;
  alertMsg = 'Please wait while your account is being created.';
  color = 'blue';

  async register() {
    this.alert = true;
    this.alertMsg = 'Please wait while your account is being created.';
    this.color = 'blue';
    this.inSubmission = true;

    try
    {
      await this.auth.createUser(this.registerForm.value as IUser)
    }
    catch (e: any)
    {
      console.log(e)
      this.alertMsg = `There was an error creating account. Error: ${ e.message }`;
      this.color = 'red';
      this.inSubmission = false;
      return
    }

    this.alertMsg = 'Account created successfully.';
    this.color = 'green';
    return
  }
}
