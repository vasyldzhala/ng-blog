import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { UserService } from './user.service';

@Injectable()
export class AuthService {

  constructor ( public afAuth: AngularFireAuth,
                private userService: UserService ) {}

  doRegister( value ) {
    return new Promise<any>( ( resolve, reject ) => {
      firebase.auth().createUserWithEmailAndPassword( value.email, value.password )
        .then(res => resolve( res ),
            err => reject( err ));
    });
  }

  doLogin( value ) {
    return new Promise<any>( ( resolve, reject ) => {
      firebase.auth().signInWithEmailAndPassword( value.email, value.password )
        .then(res => resolve(res),
            err => reject(err));
    });
  }

  doFacebookLogin() {
    return new Promise<any>(( resolve, reject ) => {
      const provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(
          res => resolve(res),
          err => {
          console.log(err);
          reject(err);
        });
    });
  }

  doGoogleLogin() {
    return new Promise<any>( ( resolve, reject ) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
        .signInWithPopup( provider )
        .then(res => {
          resolve( res );
        }, err => {
          console.log( err );
          reject( err );
        });
    });
  }

  doLogout() {
    return new Promise(( resolve, reject ) => {
      if ( firebase.auth().currentUser ) {
        this.afAuth.auth.signOut();
        resolve();
      } else {
        reject();
      }
    });
  }

}
