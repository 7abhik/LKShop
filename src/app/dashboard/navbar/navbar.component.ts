import { Component, OnInit } from '@angular/core';
import { AppUser } from 'src/app/models/app-user';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  appUser: AppUser;
  constructor(public auth: AuthService, private userService: UserService) {}

  logout() {
    this.auth.logout();
  }

  ngOnInit(): void {
    this.appUser = this.userService.getUser();
  }
}
