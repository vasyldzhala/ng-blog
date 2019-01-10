import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };
  submitted = false;
  errorMessage = '';
  facebookErrorMessage = '';
  googleErrorMessage = '';

  constructor( public auth: AuthService,
               private router: Router ) {}

  loginUser( value ) {
    this.auth.doLogin( value )
      .then(res => {
        this.router.navigate(['/welcome']);
      }, err => {
        this.errorMessage = err.message;
      });
  }

  tryFacebookLogin() {
    this.auth.doFacebookLogin()
      .then(res => {
        this.router.navigate(['/welcome']);
      })
      .catch(err => {
        this.facebookErrorMessage = err.message;
      });
  }

  tryGoogleLogin() {
    this.auth.doGoogleLogin()
      .then(res => {
        this.router.navigate(['/welcome']);
      })
      .catch(err => {
        this.googleErrorMessage = err.message;
      });
  }
}
