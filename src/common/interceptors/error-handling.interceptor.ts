import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
  BadRequestException,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

function getErrorMessage(error: unknown): string {
  if (error instanceof BadRequestException) {
    // Formats Nest BadRequestException (thrown by validation pipe)
    const { message } = error.getResponse() as { message: string[] };
    return message.join('|');
  } else {
    return (error as { message: string })?.message ?? JSON.stringify(error);
  }
}

@Injectable()
export class ErrorHandlingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(
      catchError((error) => {
        const message = getErrorMessage(error);
        const code = 500;
        context.switchToHttp().getResponse().status(code);

        Logger.error(message);

        return of({
          success: false,
          code,
          message,
        });
      }),
    );
  }
}
