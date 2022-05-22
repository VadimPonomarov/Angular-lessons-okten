import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {CommentRoutingModule} from './comment-routing.module';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentComponent} from './components/comment/comment.component';
import {CommentDetailsComponent} from './components/comment-details/comment-details.component';
import {CommentService} from "./services";
import {CommentResolver} from "./resolvers";
import {CommentGuard} from "./guards";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule
  ],
  providers: [CommentService, CommentResolver, CommentGuard]
})
export class CommentModule {
}
