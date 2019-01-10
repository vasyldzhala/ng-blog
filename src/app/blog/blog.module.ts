import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { CreatePostComponent } from './create-post/create-post.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";
import { PostComponent } from './post/post.component';
import { CommentListComponent } from './comment-list/comment-list.component';

@NgModule({
  declarations: [PostListComponent, CreatePostComponent, PostComponent, CommentListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    PostListComponent,
    PostComponent,
    CreatePostComponent
  ]
})
export class BlogModule { }
