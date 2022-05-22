import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: IPost[];

  constructor(private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(({postsData}) => this.posts = postsData);
  }

}
