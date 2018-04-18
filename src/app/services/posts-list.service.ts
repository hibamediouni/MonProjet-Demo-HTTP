import { Injectable } from '@angular/core';
import { IPost } from '../domain/ipost';

@Injectable()
export class PostsListService {

  constructor() { }
getAllPosts(): IPost[] {
  return[
    { id: 100, userId: 100, title: 'title100', body: 'Body 100'},
    { id: 200, userId: 200, title: 'title200', body: 'Body 200'},
    { id: 300, userId: 300, title: 'title100', body: 'Body 300'},
    { id: 400, userId: 400, title: 'title100', body: 'Body 100'},
  ];
}
}
