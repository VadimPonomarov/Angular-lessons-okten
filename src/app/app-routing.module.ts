import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {
        path: 'users', loadChildren: () => import('./modules/user/user.module')
          .then(m => m.UserModule)
      },
      {
        path: 'posts', loadChildren: () => import('./modules/post/post.module')
          .then(m => m.PostModule)
      },
      {
        path: 'comments', loadChildren: () => import('./modules/comment/comment.module')
          .then(m => m.CommentModule)
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
