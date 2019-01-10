import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../shared/user.service';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {

  user: any;
  profileForm: FormGroup;

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      const data = routeData['data'];
      if (data) {
        this.user = data;
        this.createForm( this.user.name, this.user.image );
      }
    });
  }

  createForm( name, image ) {
    this.profileForm = this.fb.group({
      name: [name, Validators.required ],
      image: [image, Validators.required ]
    });
  }

  updateProfile( value ) {
    this.userService.updateCurrentUser( value )
      .then(() => {
        return new Promise(( resolve, reject ) => {
          this.userService.getCurrentUser()
            .then(res => {
              this.user.name = res.displayName;
              this.user.image = res.photoURL;
              return resolve( this.user );
            }, err => {
              this.router.navigate( ['/login'] );
              return reject( err );
            });
        });
        this.router.navigate( ['/welcome'] );
      }, err => console.log( err ));
  }

  logout() {
    this.authService.doLogout()
      .then(( res ) => {
        this.router.navigate( ['/login'] );
      }, ( err ) => {
        console.log( 'Logout error', err );
      });
  }
}


