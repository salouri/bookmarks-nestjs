import { Controller, Get, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator/user.decorator';
import { JwtGuard } from 'src/auth/guard/jwt.guard';

@UseGuards(JwtGuard) // adds the jwt strategy as a middleware ahead of /users/* endpoint
@Controller('users')
export class UserController {
  @Get('me')
  getMe(@GetUser('id') userId: number) {
    return { userID: userId };
  }
}
