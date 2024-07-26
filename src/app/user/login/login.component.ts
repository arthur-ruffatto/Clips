import { Component } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import IUser from "../../models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  inSubmission = false;

  credentials = {
    email: '',
    password: ''
  }

  alert = false;
  alertMsg = 'Please wait while you are logged in.';
  color = 'blue';

  constructor(private authService: AuthService) {
  }

  async login() {
    this.alert = true;
    this.alertMsg = 'Please wait while you are logged in.';
    this.color = 'blue';
    this.inSubmission = true;

    try {
      await this.authService.loginUser(this.credentials as IUser)
    } catch (e: any) {
      console.log(e)
      this.alertMsg = `There was an error logging in. Error: ${ e.message }`;
      this.color = 'red';
      this.inSubmission = false;
      return
    }
    this.alertMsg = 'Logged in successfully.';
    this.color = 'green';
    return
  }
}
