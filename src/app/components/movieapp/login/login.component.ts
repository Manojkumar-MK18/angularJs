import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userName: string = '';
  password: any = '';

  handleLogin() {
    console.log(this.password);
    console.log(this.userName);
    this.userName = ''
    this.password = ''
  }

  ngOnInit() {
  }
}
