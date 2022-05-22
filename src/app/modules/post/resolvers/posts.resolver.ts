import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {IPost} from '../interfaces';
import {PostService} from "../services";

@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<IPost[]> {
  constructor(private _postService: PostService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost[]> {
    const userId = route.queryParams['userId'];
    if (userId) {
      return this._postService.getAllForUserId(userId);
    }
    return this._postService.getAll();
  }
}
