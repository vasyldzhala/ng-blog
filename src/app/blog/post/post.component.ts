import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DatabaseService } from '../../shared/database.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

  postKey: string;
  post: any;

  constructor (
    private route: ActivatedRoute,
    public databaseService: DatabaseService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(( params: Params ) => {
      this.postKey = params['postKey'];
      this.databaseService.getData(`/posts/${this.postKey}`)
        .subscribe( data => this.post = data,
            err => console.log( err ));
    });
  }

}
