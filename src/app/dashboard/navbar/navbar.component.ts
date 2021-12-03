import { Component, OnInit } from '@angular/core';
import { AppUser } from 'src/app/models/app-user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  appUser: AppUser;
  constructor(public auth: AuthService) {}

  logout() {
    this.auth.logout();
  }

  ngOnInit(): void {
    this.auth.appUser$.subscribe((appUser) => {
      this.appUser = appUser[0];
    });
  }
}
