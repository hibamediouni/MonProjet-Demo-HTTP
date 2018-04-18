import { Injectable } from '@angular/core';
import { IPost } from '../domain/ipost';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()  // obligatoire puisque elle inject service http
export class PostsListService {
URL = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private _http: HttpClient) { }
getAllPosts(): Observable<IPost[]> {
return this._http.get<IPost[]>(this.URL);
// map((resp: Response)) => <IPost []> resp.json());
// <IPost []> resp.json()); // il faut subscribe to observable


  /* return[
    { id: 100, userId: 100, title: 'title100', body: 'Body 100'},
    { id: 200, userId: 200, title: 'title200', body: 'Body 200'},
    { id: 300, userId: 300, title: 'title100', body: 'Body 300'},
    { id: 400, userId: 400, title: 'title100', body: 'Body 100'},
  ];*/
}
}
