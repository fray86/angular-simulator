import { HttpInterceptorFn, HttpErrorResponse, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { MessageService } from '../../message.service';

export const errorInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const messageService: MessageService = inject(MessageService);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => { 
      if (error instanceof HttpErrorResponse && error.status >= 500 && error.status < 600) {
        messageService.showError('Ошибка сервера');
      }
      return throwError(() => error);
    })
  );
};
