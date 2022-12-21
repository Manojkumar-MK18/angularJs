import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userName: string = '';
  password: any = '';
  userNameErrorMsg: string = '';
  passwordErrorMsg: string = '';

  handleLogin() {
    if (!this.userName) {
      this.userNameErrorMsg = 'Username must Needed';
    }
    if (!this.password) {
      this.passwordErrorMsg = 'Password must Needed';
    } else {
      this.passwordErrorMsg = '';
      this.userNameErrorMsg = '';
    }

    this.userName = '';
    this.password = '';
  }

  ngOnInit() {}
}
