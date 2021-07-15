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
          if (error.status ==  404){

            window.alert("404 чета не так какое 404");
            return throwError("404 чета не так, какое 404");
          }
          else
          {


            if (error.error instanceof ErrorEvent) {

              // client-side error
              if (error.error.message!=null){
                errorMessage = `Client-side Error: ${error.error.message}\n ${error.name}`;
              }

              errorMessage = `Client-side Error:` +  error.message + ` stack ` + error.name

            } else {

              // server-side error
              console.log(error)
              if (error.error!=null && error.error.httpStatus!=null && error.error.message != null){
                console.log("custom message")
                errorMessage = `Server-side Error Code: ${error.error.httpStatus}\nMessage: ${error.error.message}}`;
              }
              else
              {
                errorMessage = `Server-side Error Code: ${error.statusText} \nMessage: ${error.message}`
              }



            }

            window.alert(errorMessage);

            return throwError(errorMessage);
          }


        })

      )

  }

}
