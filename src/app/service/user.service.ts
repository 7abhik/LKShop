import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppUser } from '../models/app-user';
import { userSecrate } from '../models/user-secrate';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  authenticateUser(userSecrate: userSecrate) {
    return this.http.post('http://localhost:4000/api/auth', userSecrate);
  }

  registerUser(appUser: AppUser) {
    return this.http.post('http://localhost:4000/api/user', appUser);
  }
}
