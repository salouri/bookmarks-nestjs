import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signup(_body: any) {
    return { msg: 'I am signed up' };
  }

  signin() {
    return 'I am signed in';
  }
}
