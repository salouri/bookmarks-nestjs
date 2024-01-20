import { Controller, Get } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator/user.decorator';

@Controller('users')
export class UserController {
  @Get('me')
  getMe(@GetUser('id') userId: number) {
    return { userID: userId };
  }
}
