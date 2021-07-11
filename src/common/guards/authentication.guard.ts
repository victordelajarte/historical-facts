import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/authentication/authentication.service';

const NOT_PROTECTED_ROUTES = ['/api/authentication/login'];

@Injectable()
export class AuthenticationGuard implements CanActivate {
  private logger = new Logger();
  constructor(private authenticationService: AuthenticationService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const httpContext = context.switchToHttp();
      const request = httpContext.getRequest();
      if (NOT_PROTECTED_ROUTES.includes(request.originalUrl)) {
        return true;
      }

      this.authenticationService.validateToken(request.cookies.authToken);
      return true;
    } catch {
      return false;
    }
  }
}
