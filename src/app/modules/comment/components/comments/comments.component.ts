import {Component, OnInit} from '@angular/core';
import {IComment} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments: IComment[];

  constructor(private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(({commentData}) => this.comments = commentData);
  }

}
