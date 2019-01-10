import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {PostListComponent} from './blog/post-list/post-list.component';
import {WelcomeComponent} from './auth/welcome/welcome.component';
import {WelcomeResolver} from './auth/welcome/welcome.resolver';
import {AuthGuard} from './shared/auth.guard';
import {CreatePostComponent} from './blog/create-post/create-post.component';
import {CreateGuard} from './shared/create.guard';
import {PostComponent} from "./blog/post/post.component";

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  {
    path: 'posts', component: PostListComponent,
    children: [
      {path: ':postKey', component: PostComponent}
    ]
  },
  { path: 'create', component: CreatePostComponent, canActivate: [CreateGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'welcome', component: WelcomeComponent, resolve: { data: WelcomeResolver} },
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
