import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {IComment} from "../interfaces";
import {CommentService} from "../services";

@Injectable({
  providedIn: 'root'
})
export class CommentResolver implements Resolve<IComment[]> {
  constructor(private _commentsService: CommentService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment[]> {
    const postId = route.queryParams['postId'];
    if (postId) {
      return this._commentsService.getAllForPostId(postId);
    }
    return this._commentsService.getAll();
  }
}
