import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

import {IToken, IUser} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessTokenKey = 'accessToken';
  private refreshTokenKey = 'refreshToken';

  constructor(private _httpClient: HttpClient) {
  }

  register(user: IUser): Observable<IUser> {
    return this._httpClient.post<IUser>(urls.register, user);
  }

  login(user: IUser): Observable<IToken> {
    return this._httpClient.post<IToken>(urls.login, user);
  }

  saveTokens(token: IToken): void {
    localStorage.removeItem(this.accessTokenKey);
    localStorage.setItem(this.accessTokenKey, token.access);

    localStorage.removeItem(this.refreshTokenKey);
    localStorage.setItem(this.refreshTokenKey, token.refresh);
  }

  deleteToken(): void {
    localStorage.removeItem(this.accessTokenKey);
  }

  getToken(): string {
    return localStorage.getItem(this.accessTokenKey) as string;
  }

  getRefreshToken(): string {
    return localStorage.getItem(this.refreshTokenKey) as string;
  }

  isAutorised(): boolean {
    return !!localStorage.getItem(this.accessTokenKey);
  }

  refresh(): Observable<IToken> {
    const refreshToken = this.getRefreshToken();
    const fetchPath = [urls.login, 'refresh'].join('/');
    return this._httpClient.post<IToken>(fetchPath, {refreshToken}).pipe(
      tap((tokens: IToken) => {
        this.saveTokens(tokens);
      })
    );
  }

}
