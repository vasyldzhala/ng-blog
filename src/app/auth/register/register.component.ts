import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import {AuthService} from '../../shared/auth.service';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage = '';
  successMessage = '';
  facebookErrorMessage = '';
  googleErrorMessage = '';
  passportValidationRegex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{6,}$';

  constructor(public auth: AuthService,
              private router: Router,
              private fb: FormBuilder,
              private userService: UserService) {
    this.createForm();
  }

  matchPassword ( abstractControl: AbstractControl ) {
    const password = abstractControl.get( 'password' ).value;
    const confirmPassword = abstractControl.get( 'confirmPassword' ).value;
    if (password !== confirmPassword) {
      abstractControl.get( 'confirmPassword' ).setErrors( { MatchPassword: true } );
    } else {
      return null;
    }
  }

  createForm() {
    this.registerForm = this.fb.group({
        email: ['', [
          Validators.required,
          Validators.email
        ]],
        password: ['', [
          Validators.required,
          Validators.maxLength( 100 ),
          Validators.pattern( this.passportValidationRegex )
        ]],
        confirmPassword: ['', [
          Validators.required,
          Validators.maxLength( 100 ),
          Validators.pattern( this.passportValidationRegex )
        ]]
      },
      {
        validator: this.matchPassword
      });
  }



  registerUser(user) {
    this.auth.doRegister(user)
      .then(res => {
        this.errorMessage = '';
        this.successMessage = 'Your account has been created';
        this.userService.updateCurrentUser({
          name: 'Anonymous',
          image: 'assets/img/account_image.png'
        }).then(data => {
          this.router.navigate(['/welcome']);
        }).catch(err => console.log(err));
      }, err => {
        this.errorMessage = err.message;
        this.successMessage = '';
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
