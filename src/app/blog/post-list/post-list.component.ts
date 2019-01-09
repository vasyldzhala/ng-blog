import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../../shared/database.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor(public dbService: DatabaseService) { }

  ngOnInit() {
    this.dbService.posts.subscribe(data => console.log(data));

    // this.dbService.posts.subscribe(
    //   items => {
    //     const unsortedList = [];
    //     items.forEach(el => {
    //       console.log(el.key);
    //       console.log(el.payload.val());
    //       const { payload, key } = el;
    //       const item = payload.toJSON();
    //       unsortedList.push({...item, key});
    //     });

        // this.todoListArray = this.sortTodoList(unsortedList);
        // console.log('Todos', this.todoListArray);
      // });
  }

}
