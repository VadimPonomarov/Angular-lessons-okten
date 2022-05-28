import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, switchMap, throwError} from 'rxjs';

import {AuthService} from "../../../services";
import {Router} from "@angular/router";
import {IToken} from "../../../interfaces";

@Injectable()
export class CarInterceptor implements HttpInterceptor {
  isRefreshing = false;

  constructor(private _authService: AuthService, private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<ErrorEvent>> {
    const isAutorised = this._authService.isAutorised();
    if (isAutorised) {
      const token = this._authService.getToken();
      request = this.addToken(request, token);
    }
    return next.handle(request).pipe(
      catchError((res: HttpErrorResponse) => {
        if (res && res.error && res.status === 401) {
          return this.handle401Error(request, next);

        }
        return throwError(() => new Error('token invalid or expired'));
      })
    ) as Observable<HttpEvent<ErrorEvent>>;
  }

  addToken(request: HttpRequest<unknown>, token: string): HttpRequest<unknown> {
    return request.clone({
      setHeaders: {Authorization: `Bearer ${token}`}
    });
  }

  handle401Error(request: HttpRequest<unknown>, next: HttpHandler): any {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      return this._authService.refresh().pipe(
        switchMap((tokens: IToken) => {
          return next.handle(this.addToken(request, tokens.access));
        }),
        catchError(() => {
          this.isRefreshing = false;
          this._authService.deleteToken();
          this.router.navigate(['login']);
          return throwError(() => new Error('token invalid or expired'));
        })
      );
    }
  }
}
