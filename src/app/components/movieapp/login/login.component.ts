import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
  constructor(private auth: AuthService, private route: Router) { }

  handleLogin() {
    if (!this.userName) {
      this.userNameErrorMsg = 'Username must Needed';
    }
    if (!this.password) {
      this.passwordErrorMsg = 'Password must Needed';
    } else {
      this.passwordErrorMsg = '';
      this.userNameErrorMsg = '';
      let loginResponse = this.auth.login(this.userName, this.password)
      console.log('====================================');
      console.log(loginResponse);
      console.log('====================================');
      if (loginResponse === 200) {
        this.route.navigate(['moviePage'])
      }
    }

    this.userName = '';
    this.password = '';
  }

  ngOnInit() { }
}
