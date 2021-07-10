import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { UserDto } from './user-dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @Post('login')
  public login(@Body() userDto: UserDto): string {
    const token = this.authenticationService.login(userDto);
    return token;
  }
}
