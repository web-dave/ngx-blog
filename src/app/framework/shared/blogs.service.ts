import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BlogsService {
  constructor(private http: HttpClient) {}

  getPostList(): Observable<Post[]> {
    return this.http.get<Post[]>('assets/posts/posts.json');
    // .pipe(map(popj => popj.posts));
  }
}

interface PostsObj {
  posts: Post[];
}

export interface Post {
  url: string;
  name: string;
  title: string;
  preview: string;
  timestamp: number;
}
