import { Injectable, UnauthorizedException } from '@nestjs/common';
import { VALID_TOKEN, AUTHORIZED_USERS } from './constants';
import { User } from './user.interface';

@Injectable()
export class AuthenticationService {
  public validateToken(token: string): void {
    if (token !== VALID_TOKEN) {
      throw new UnauthorizedException();
    }
  }

  public login({ email, password }: User): string {
    const user = AUTHORIZED_USERS.find(
      (user) => user.email === email && user.password === password,
    );

    if (!user) {
      throw new UnauthorizedException();
    }

    return VALID_TOKEN;
  }

  public signup({ email, password }: User): string {
    const existingUser = AUTHORIZED_USERS.find((user) => user.email === email);
    if (existingUser) {
      throw new UnauthorizedException();
    }

    AUTHORIZED_USERS.push({ email, password });
    return VALID_TOKEN;
  }
}
