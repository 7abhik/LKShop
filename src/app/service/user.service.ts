import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  addMemeber(token, member) {
    return this.http.post('http://localhost:4000/api/user/member', member, {
      headers: { 'x-auth-token': token },
    });
  }

  validateUser(token): Observable<any> {
    return this.http.get('http://localhost:4000/api/auth', {
      headers: { 'x-auth-token': token },
    });
  }
  memberList(token, obj): Observable<any> {
    return this.http.post('http://localhost:4000/api/user/member-list', obj, {
      headers: { 'x-auth-token': token },
    });
  }
}
