import {Component, OnInit} from '@angular/core';
import {IComment} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  title: string = 'Comment list';
  comments: IComment[];

  constructor(private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(({commentData}) => this.comments = commentData);
    const ifCommentsOfPost = this.comments[0].postId === this.comments[this.comments.length - 1].postId;
    if (ifCommentsOfPost) {
      this.title = ['Comment list for post', this.comments[0].postId].join(' ');
    }
  }

}
