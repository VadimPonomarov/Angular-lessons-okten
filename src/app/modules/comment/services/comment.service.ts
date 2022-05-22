import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IComment} from "../interfaces";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<IComment[]> {
    return this._httpClient.get<IComment[]>(urls.comments);
  }

  getAllForPostId(postId: string): Observable<IComment[]> {
    const fetchPath = [urls.posts, postId, 'comments'].join('/');
    return this._httpClient.get<IComment[]>(fetchPath);
  }
}
