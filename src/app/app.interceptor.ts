import { Injectable } from '@angular/core';
import {
    HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent,
    HttpResponse, HttpUserEvent, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TokenStorage } from './token.storage';
import 'rxjs/add/operator/do';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class MMInterceptor implements HttpInterceptor {

    constructor(private token: TokenStorage, private router: Router) { }

    /*     intercept(req: HttpRequest, next: HttpHandler):
            Observable<HttpRequest> | HttpUserEvent {
            let authReq = req;
            if (this.token.getToken() != null) {
                authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this.token.getToken()) });
            }
            return next.handle(authReq).do(
                (err: any) => {
                    if (err instanceof HttpErrorResponse) {
    
                        if (err.status === 401) {
                            this.router.navigate(['user']);
                        }
                    }
                }
            );
        } */

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {

        let authReq = req;

        if (this.token.getToken() != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this.token.getToken()) });
        }
        return next.handle(authReq).do(
            (err: any) => {
                if (err instanceof HttpErrorResponse) {

                    if (err.status === 401) {
                        this.router.navigate(['user']);
                    }
                }
            }
        );
    }

}