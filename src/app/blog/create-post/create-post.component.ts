import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/index';
import {UserService} from '../../shared/user.service';
import {DatabaseService} from '../../shared/database.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})

export class CreatePostComponent implements OnInit {

  postForm: FormGroup;
  posts: Observable<any[]>;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private dbService: DatabaseService) {
  }

  ngOnInit() {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      subject: ['', [Validators.required]],
      image: ['', [Validators.required]],
      text: ['', [Validators.required]]
    });
  }

  publishPost(postForm) {
    const data = {
      ...postForm.value,
      author: this.userService.currentUser,
      date: Date.now()
    };
    this.dbService.postData('/posts', data)
      .then(res => postForm.reset(),
        err => console.log(err));
  }
}
