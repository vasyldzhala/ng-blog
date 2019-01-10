import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor (
    public userService: UserService,
    private router: Router,
  ) {}

  canActivate(): Promise<boolean> {
    return new Promise( (resolve, reject) => {
        return this.userService.getCurrentUser()
          .then( user => {
            this.router.navigate( ['/welcome'] );
            return resolve( false );
          })
          .catch(err => {
            return resolve( true );
          });
      });
  }
}
