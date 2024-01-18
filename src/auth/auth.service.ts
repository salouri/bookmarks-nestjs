import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(dto: AuthDto) {
    console.log('dto: ', dto);
    // generate the pass hash
    const hash = await argon.hash(dto.password);
    // save user in the db
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        createdAt: true,
      },
    });
    // or you can use "delete user.hash"
    // return saved record
    return user;
  }

  signin() {
    return 'I am signed in';
  }
}
