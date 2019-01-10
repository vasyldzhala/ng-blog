import {Component, OnInit} from '@angular/core';
import {Router, Params} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/auth.service';
import {UserService} from '../../shared/user.service';
import avatar from '../../../assets/img/account_image.png';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage = '';
  successMessage = '';
  facebookErrorMessage = '';
  googleErrorMessage = '';

  constructor(public auth: AuthService,
              private router: Router,
              private fb: FormBuilder,
              private userService: UserService) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  registerUser(user) {
    console.log(user);
    this.auth.doRegister(user)
      .then(res => {
        this.errorMessage = '';
        this.successMessage = 'Your account has been created';
        this.userService.updateCurrentUser({
          name: 'Anonymous',
          image: avatar
        }).then(data => {
          console.log(data);
          this.router.navigate(['/welcome']);
        }).catch(err => console.log(err));
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';
      });
  }

  tryFacebookLogin() {
    this.auth.doFacebookLogin()
      .then(res => {
        console.log(res);
        this.router.navigate(['/welcome']);
      })
      .catch(err => {
        console.log(err);
        this.facebookErrorMessage = err.message;
      });
  }

  tryGoogleLogin() {
    this.auth.doGoogleLogin()
      .then(res => {
        console.log(res);
        this.router.navigate(['/welcome']);
      })
      .catch(err => {
        console.log(err);
        this.googleErrorMessage = err.message;
      });
  }

  ngOnInit() {
  }

}
