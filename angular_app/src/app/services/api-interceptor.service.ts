import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

import { Injectable } from "@angular/core";

import { mergeMap, Observable, take } from "rxjs";

import { ReportsService } from "./reports.service";

 

@Injectable({

  providedIn: 'root'

})

export class TokenInterceptor implements HttpInterceptor {

 

  constructor(private x: ReportsService) {}

   token: string = '';

 

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

 

  //   return this.x.callApi('dev-vm-blr6','nrs').pipe(

  //     mergeMap((token: obj) => {

  //       console.log('jjjjjj');

  //         if (token.access_token) {

  //             request = request.clone({ setHeaders: { Authorization: `Bearer ${token}` } });

  //         }

  //         return next.handle(request);

  //     })

  // );

 

  return next.handle(request);

  }

}

 

interface obj {

  access_token: string;

  expires_in: number;

  token_type: string

}