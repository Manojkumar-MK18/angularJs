import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  login(userName: any, password: any) {
    if (!userName && !password) {
      return 400;
    } else return 200;
  }
}
