import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  title: string = 'Post list';
  posts: IPost[];

  constructor(private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(({postsData}) => this.posts = postsData);
    const ifUserPosts = this.posts[0].userId === this.posts[this.posts.length - 1].userId;
    if (ifUserPosts) {
      this.title = ['Post list of User', this.posts[0].userId].join(' ');
    }
  }

}
