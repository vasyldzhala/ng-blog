import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { CreatePostComponent } from './create-post/create-post.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [PostListComponent, CreatePostComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PostListComponent,
    CreatePostComponent
  ]
})
export class BlogModule { }
