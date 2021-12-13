import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss'],
})
export class MemberFormComponent implements OnInit {
  constructor() {}

  profileData = new FormGroup({
    fullName: new FormControl('Abhishek'),
    mobile: new FormControl('8130845883'),
    joinDate: new FormControl('23/09/1993'),
    age: new FormControl('28'),
    userRole: new FormControl('cleaner'),
    profileImage: new FormControl('https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg'),
    desc: new FormControl('desc'),
  });

  onSubmit() {
    console.log(this.profileData.value);
		console.log("*****************************************");
    console.log(this.profileData);

  }

  ngOnInit(): void {}
}

