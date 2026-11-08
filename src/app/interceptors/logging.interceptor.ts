import { HttpInterceptorFn, HttpResponse, HttpErrorResponse, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const startTime: number = Date.now();

  function logResponse(status: number): void {
    const resultTime: number = Date.now() - startTime;
    console.log(`${req.method} ${req.url} Status: ${status} Time: ${resultTime} ms`);
  }

  return next(req).pipe(
    tap({
      next: (event: HttpEvent<unknown>) => {
        if (event instanceof HttpResponse) {
          logResponse(event.status);
        }
      },
      error: (error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse) {
          logResponse(error.status);
        }
      },
    })
  );
};


  

