import { Injectable } from '@nestjs/common';
import { VALID_TOKEN, AUTHORIZED_USERS } from './constants';
import { User } from './User';

@Injectable()
export class AuthenticationService {
  public validateToken(token: string): void {
    if (token !== VALID_TOKEN) {
      throw new Error('Unauthorized');
    }
  }

  public login({ email, password }: User): string {
    const user = AUTHORIZED_USERS.find(
      (user) => user.email === email && user.password === password,
    );

    if (!user) {
      throw new Error('Unauthorized');
    }

    return VALID_TOKEN;
  }
}
