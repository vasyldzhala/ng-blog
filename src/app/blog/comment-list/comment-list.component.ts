import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../shared/user.service';
import { DatabaseService } from '../../shared/database.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})

export class CommentListComponent implements OnInit {

  commentForm: FormGroup;
  postKey: string;
  comments: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private dbService: DatabaseService
  ) {}

  ngOnInit() {
    this.commentForm = this.fb.group({
      comment: ['', [Validators.required]]
    });

    this.route.params.subscribe(( params: Params ) => {
      this.postKey = params['postKey'];
      this.dbService
        .getDataList(`/posts/${this.postKey}/comments`)
        .subscribe( data => this.comments = data);
    });

  }

  publishComment( commentForm, postKey ) {
    const data = {
      ...commentForm.value,
      commentator: this.userService.currentUser,
      date: Date.now()
    };
    const url = `/posts/${postKey}/comments`;
    this.dbService.postData( url, data )
      .then(() => commentForm.reset(),
        err => console.log( err ));
  }
}
