import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AppUser } from '../models/app-user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private afs: AngularFirestore) {}

  /*   getUser(uid: string): Observable<any> {
    return this.afs
      .collection('members', (ref) => {
        return ref.where('uid', '==', uid);
      })
      .valueChanges();
  } */
  async getUserByuid(uid: string): Promise<any> {
    return await this.afs
      .collection('members')
      .ref.where('uid', '==', uid)
      .get();
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
