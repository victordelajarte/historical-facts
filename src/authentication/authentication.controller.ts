import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthenticationService } from './authentication.service';
import { UserDto } from './user.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @Post('login')
  public login(
    @Body() userDto: UserDto,
    @Res({ passthrough: true }) response: Response,
  ): void {
    const token = this.authenticationService.login(userDto);
    this.setCookieAndRedirect(response, token);
  }

  @Post('signup')
  public signup(
    @Body() userDto: UserDto,
    @Res({ passthrough: true }) response: Response,
  ): void {
    const token = this.authenticationService.signup(userDto);
    this.setCookieAndRedirect(response, token);
  }

  @Get('logout')
  public logout(@Res({ passthrough: true }) response: Response): void {
    this.setCookieAndRedirect(response);
  }

  private setCookieAndRedirect(response: Response, token = ''): void {
    const isLogout = !token;

    response.cookie('authToken', token, {
      maxAge: isLogout ? -1 : 24 * 3600,
      httpOnly: true,
      sameSite: true,
    });
    response.redirect(isLogout ? '/login.html' : '/');
  }
}
