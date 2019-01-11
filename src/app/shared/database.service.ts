import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs/index';
import { map } from 'rxjs/internal/operators';

@Injectable()
export class DatabaseService {

  posts: Observable<any[]>;

  constructor( public db: AngularFireDatabase ) {

    this.posts = this.getDataList( '/posts' );

  }

  postData( url: string, data: any ) {
    return this.db.list( url ).push( data );
  }

  getData( url: string ) {
    return this.db.object( url ).snapshotChanges()
      .pipe( map(item => ({ key: item.payload.key, ...item.payload.val() })));
  }

  getDataList( url: string ): Observable<any[]> {
    return this.db.list( url )
      .snapshotChanges()
      .pipe( map(
        data => data.map( item => ({ key: item.payload.key, ...item.payload.val() }))
      ));
  }
}
