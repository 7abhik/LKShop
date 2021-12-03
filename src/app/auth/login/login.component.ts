import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  googleLogin() {
    this.auth
      .GoogleAuth()
      .then((result) => {
				localStorage.setItem('isLoggedIn', 'true');
				localStorage.setItem('token','tt');
        this.router.navigate([''])
      })
      .catch((error) => {
        alert(error);
      });
  }

  emailLogin() {}

  ngOnInit(): void {}
}
