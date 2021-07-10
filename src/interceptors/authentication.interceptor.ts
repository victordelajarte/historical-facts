import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from 'src/authentication/authentication.service';

const NOT_PROTECTED_ROUTES = ['/api/authentication/login'];

@Injectable()
export class AuthenticationInterceptor implements NestInterceptor {
  private logger = new Logger();
  constructor(private authenticationService: AuthenticationService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(
      tap(() => {
        const httpContext = context.switchToHttp();
        const request = httpContext.getRequest();
        const response = httpContext.getResponse();

        if (!NOT_PROTECTED_ROUTES.includes(request.originalUrl)) {
          try {
            this.authenticationService.validateToken(request.cookies.authToken);
          } catch (error) {
            Logger.log(error);
            response.redirect('/login.html');
          }
        }
      }),
    );
  }
}
