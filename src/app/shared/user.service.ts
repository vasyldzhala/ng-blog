import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()

export class UserService {
  defaultUser = {
    name: '',
    image: '',
    provider: '',
    email: '',
    id: ''
  };

  currentUser: any = {...this.defaultUser};

  constructor ( public db: AngularFirestore,
                public afAuth: AngularFireAuth ) {
  }

  setCurrentUser( user ) {
    this.currentUser.name = user.displayName;
    this.currentUser.email = user.email;
    this.currentUser.provider = user.providerData[0].providerId;
    this.currentUser.image = user.photoURL;
    this.currentUser.id = user.uid;
  }

  getCurrentUser(): Promise<any> {
    return new Promise<any>(( resolve, reject ) => {
      firebase.auth().onAuthStateChanged(user => {
        if ( user ) {
          this.setCurrentUser( user );
          resolve( user );
        } else {
          this.currentUser = { ...this.defaultUser };
          reject( 'No user logged in' );
        }
      });
    });
  }

  updateCurrentUser( value ): Promise<any> {
    return new Promise<any>(( resolve, reject ) => {
      const user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: value.name,
        photoURL: value.image
      }).then(res => {
        resolve( res );
      }, err => reject( err ));
    });
  }
}
