import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthenticationService } from './authentication.service';
import { UserDto } from './user-dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @Post('login')
  public login(
    @Body() userDto: UserDto,
    @Res({ passthrough: true }) response: Response,
  ): string {
    const token = this.authenticationService.login(userDto);
    response.cookie('auth-token', token);
    return token;
  }
}
