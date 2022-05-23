import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IComment} from "../../interfaces";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.scss']
})
export class CommentDetailsComponent {
  title: string;
  comment: IComment;

  constructor(private activatedRoute: ActivatedRoute, private _router: Router) {
    this.activatedRoute.params.subscribe(() => {
      const state = this._router.getCurrentNavigation()?.extras?.state?.['commentData'] as IComment;
      if (state) {
        this.comment = state;
      }
      this.title = ['Comment', this.comment.id, 'for post', this.comment.postId, 'details'].join(' ');
    });
  }

  goBack() {
    this._router.navigate(['comments']);
  }
}
