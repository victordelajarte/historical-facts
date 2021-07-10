import { Injectable } from '@nestjs/common';
import { VALID_TOKEN, AUTHORIZED_USERS } from './constants';

@Injectable()
export class AuthenticationService {
  public validateToken(token: string): boolean {
    return token === VALID_TOKEN;
  }

  public login(email: string, password: string): string {
    const user = AUTHORIZED_USERS.find(
      (user) => user.email === email && user.password === password,
    );

    if (!user) {
      throw new Error('Unauthorized');
    }

    return VALID_TOKEN;
  }
}
