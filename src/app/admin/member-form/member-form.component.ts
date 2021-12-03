import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss'],
})
export class MemberFormComponent implements OnInit {
  constructor(private db: AngularFirestore) {}

  profileData = new FormGroup({
    fullName: new FormControl('AB Kr'),
    mobile: new FormControl('8130'),
  });

  onSubmit() {
    console.log(this.profileData.value);
		console.log("*****************************************");
    console.log(this.profileData);

  }

  ngOnInit(): void {}
}

/* console.log('show Data');
    this.db
      .collection('members')
      .get()
      .subscribe((members) => {
        members.docs.forEach((doc) => {
          console.log('Data=>  ', doc.data());
          console.log('get=>  ', doc.get);
          console.log('id=>  ', doc.id);
          console.log('ref=>  ', doc.ref);
        });
      }); */
