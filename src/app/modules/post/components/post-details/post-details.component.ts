import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {IPost} from "../../interfaces";


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post: IPost;

  constructor(private _activatedRoute: ActivatedRoute,
              private _router: Router,
              private _location: Location
  ) {
    this._activatedRoute.params.subscribe(() => {
      const state = this._router.getCurrentNavigation()?.extras?.state?.['postData'] as IPost;
      if (state) {
        this.post = state;
      }
    });
  }

  ngOnInit(): void {
  }

  goBack(): void {
    this._location.back();
  }

  goComments(): void {
    this._router.navigate(['comments'], {queryParams: {postId: this.post.id}});
  }
}
