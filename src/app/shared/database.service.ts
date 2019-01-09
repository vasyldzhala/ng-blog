import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
// import {auth} from 'firebase/app';
import {Observable} from 'rxjs/index';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  posts: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {

    this.posts = db.list('/posts')
      .snapshotChanges()
      .pipe(map(
        data => data.map( item => ({ key: item.payload.key, ...item.payload.val() }) )
      ));
  }

  postData(url: string, data: any) {
    console.log('post', data);
    return this.db.list(url).push(data);
  }
}
