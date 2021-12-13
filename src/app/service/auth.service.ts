import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import auth from 'firebase/app';
import { AppUser } from '../models/app-user';
import { userSecrate } from '../models/user-secrate';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;
  constructor(private router: Router, private userService: UserService) {}

  GoogleAuth() {
    return this.AuthLogin(new auth.auth.GoogleAuthProvider());
  }

  RegisterUser(appUser: AppUser) {
    this.userService.registerUser(appUser).subscribe((response) => {
      this.setUser(response);
      document.location.href = '/';
    });
  }

  LoginWithEmailPass(userSecrate: userSecrate) {
    const { email, password } = userSecrate;
    this.userService
      .authenticateUser({ email, password })
      .subscribe((response) => {
        this.setUser(response);
        const returnUrl = localStorage.getItem('returnUrl') || '';
        document.location.href = returnUrl;
      });
  }

  logout(): void {
    this.unsetUser();
    this.router.navigate(['login']);
  }

  private AuthLogin(provider) {
    // return this.afAuth.signInWithPopup(provider);
  }

  isLoggedIn() {
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    if (isLoggedIn) {
      return this.loginCheck();
    }
    return false;
  }

  private loginCheck() {
    return true; // here we verify token by token verify api
  }

  private setUser(respose) {
    const { token } = respose;
    localStorage.setItem('token', token);
    localStorage.setItem('isLoggedIn', 'true');
  }

  private unsetUser() {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
