import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from "./components/users/users.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import { UserGuard } from './guards';
import {UsersResolver} from "./resolvers";

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    resolve: {usersData: UsersResolver},
    canDeactivate: [UserGuard]
  },
  {
    path: ':id', component: UserDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
