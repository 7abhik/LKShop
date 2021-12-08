import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private route: ActivatedRoute) {
    console.log('Login constructor called');
    localStorage.setItem(
      'returnUrl',
      this.route.snapshot.queryParams.returnUrl || '/'
    );
  }

  googleLogin() {
    // this.auth.GoogleAuth();
    alert('Google login comming soon');
  }

  userData = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rememberme: new FormControl(false),
  });

  emailLogin() {
    this.authService.LoginWithEmailPass(this.userData.value);
  }

  ngOnInit(): void {}
}
