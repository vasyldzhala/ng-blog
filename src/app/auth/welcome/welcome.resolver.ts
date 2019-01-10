import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserService } from '../../shared/user.service';

@Injectable()
export class WelcomeResolver implements Resolve<any> {

  constructor(public userService: UserService,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Promise<any> {

    const user = {
      image: '',
      name: '',
      email: '',
      provider: ''
    };

    return new Promise(( resolve, reject ) => {
      this.userService.getCurrentUser()
        .then(res => {
          if ( res.providerData[0].providerId === 'password' && !res.photoURL ) {
            user.image = 'assets/img/account_image.png';
          } else {
            user.image = res.photoURL;
          }
          user.name = res.displayName;
          user.email = res.email;
          user.provider = res.providerData[0].providerId;
          return resolve( user );
        }, err => {
          this.router.navigate( ['/login'] );
          return reject( err );
        });
    });
  }
}
