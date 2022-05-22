import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../../constants";
import {IPost} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<IPost[]> {
    return this._httpClient.get<IPost[]>(urls.posts);
  }

  getAllForUserId(userId: string): Observable<IPost[]> {
    const fetchPath = [urls.users, userId, 'posts'].join('/');
    return this._httpClient.get<IPost[]>(fetchPath);
  }
}
