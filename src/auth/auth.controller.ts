import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth') //global prefix in the url
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup') //  same as "/auth/signup"
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin') //  same as "/auth/signin"
  singin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
