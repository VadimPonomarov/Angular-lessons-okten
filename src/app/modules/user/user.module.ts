import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {HttpClientModule} from "@angular/common/http";
import {UserGuard} from "./guards";
import {UserService} from "./services";
import {UsersResolver} from "./resolvers";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [UserService, UsersResolver, UserGuard]
})
export class UserModule {
}
