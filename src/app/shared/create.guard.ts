import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Injectable()
export class CreateGuard implements CanActivate {

  constructor(
    public userService: UserService,
    private router: Router,
  ) {}

  canActivate(): Promise<boolean> {

    return new Promise( ( resolve, reject ) => {
      return this.userService.getCurrentUser()
        .then( user => {
          return resolve( true );
        })
        .catch(err => {
          this.router.navigate( ['/login'] );
          return resolve( false );
        });
    });
  }
}
