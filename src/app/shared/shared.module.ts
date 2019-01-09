import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DatabaseService} from './database.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment';
import {AuthService} from './auth.service';
import {UserService} from './user.service';
import {AuthGuard} from './auth.guard';
import {CreateGuard} from './create.guard';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    DatabaseService,
    AuthService,
    UserService,
    AuthGuard,
    CreateGuard
  ]
})
export class SharedModule { }
