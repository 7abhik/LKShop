import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import auth from 'firebase/app';
import { EMPTY, Observable, of } from 'rxjs';
import { AppUser } from '../models/app-user';
import { UserService } from './user.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private userService: UserService
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  GoogleAuth() {
    return this.AuthLogin(new auth.auth.GoogleAuthProvider());
  }

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.afAuth.signOut();
    this.router.navigate(['login']);
  }

  private AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider);
  }

  isLoggedIn() {
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    if (isLoggedIn) {
      return this.loginCheck();
    }
    return false;
  }

  get appUser$(): Observable<AppUser> {
    const user = JSON.parse(localStorage.getItem('user'));
    const uid = user.uid;
    if (user)
      return this.userService.getUser(uid).pipe(
        map((user) => {
          return user;
        })
      );
    return EMPTY;
  }

  private loginCheck() {
    return true;
  }
}
