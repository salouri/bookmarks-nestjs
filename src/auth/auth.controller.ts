import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth') //global prefix in the url
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup') //  same as "/auth/signup"
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @Post('signin') //  same as "/auth/signin"
  singin() {
    return this.authService.signin();
  }
}
