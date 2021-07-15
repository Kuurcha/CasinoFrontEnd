import {

  HttpEvent,

  HttpInterceptor,

  HttpHandler,

  HttpRequest,

  HttpResponse,

  HttpErrorResponse

} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';



export class InterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)

      .pipe(

        retry(1),

        catchError((error: HttpErrorResponse) => {

          let errorMessage = '';

          if (error.error instanceof ErrorEvent) {

            // client-side error

            errorMessage = `Client-side Error: ${error.error.message}\n ${error.name}`;

          } else {

            // server-side error
            console.log(errorMessage)

            errorMessage = `Server-side Error Code: ${error.error.httpStatus}\nMessage: ${error.error.message}}`;

          }

          window.alert(errorMessage);

          return throwError(errorMessage);

        })

      )

  }

}
