import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public route: Router) { }
  login(userName: any, password: any) {
    if (!userName && !password) {
      return 400;
    } else return 200;
  }
  logout() {
    this.route.navigate(['movie'])
  }
}
