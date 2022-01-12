import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss'],
})
export class MemberFormComponent implements OnInit {
  constructor(private userService: UserService) {}

  profileData = new FormGroup({
    firstName: new FormControl('Abhishek'),
    lastName: new FormControl('kumar'),
    mobile: new FormControl('8130845883'),
    joinDate: new FormControl('23/09/1993'),
    age: new FormControl('28'),
    role: new FormControl('cleaner'),
    profileImage: new FormControl(
      'https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg'
    ),
    desc: new FormControl('desc'),
  });

  onSubmit() {
    console.log(this.profileData.value);
    console.log('*****************************************');
    console.log(this.profileData);
    const token = localStorage.getItem('token');
    this.profileData.value.isAdmin =
      this.profileData.value.role == 'manager' ? true : false;
    this.profileData.value.email = '';
    this.userService
      .addMemeber(token, this.profileData.value)
      .subscribe((response) => {
        console.log(response);
      });
  }

  ngOnInit(): void {}
}
