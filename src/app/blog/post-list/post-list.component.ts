import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../shared/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor ( private router: Router,
                public dbService: DatabaseService ) {
  }

  ngOnInit() {

    this.dbService.posts.subscribe(data => {
      if (this.router.url === '/posts') {
        this.router.navigate( ['/posts/', data[0].key] );
      }
    });
  }

}
