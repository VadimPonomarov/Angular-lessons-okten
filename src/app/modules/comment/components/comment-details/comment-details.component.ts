import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IComment} from "../../interfaces";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.scss']
})
export class CommentDetailsComponent {
  comment: IComment;

  constructor(private activatedRoute: ActivatedRoute, private _router: Router) {
    this.activatedRoute.params.subscribe(() => {
      const state = this._router.getCurrentNavigation()?.extras?.state?.['commentData'] as IComment;
      if (state) {
        this.comment = state;
      }
    });
  }

  goBack() {
    this._router.navigate(['comments']);
  }
}
