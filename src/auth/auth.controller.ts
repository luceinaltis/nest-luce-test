import { Controller, Get, Post } from '@nestjs/common';

@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  // 회원가입
  @Post('signup')
  signUp() {
    return 0;
  }

  // 로그인
  @Get('signin')
  signIn() {}

  @Get('username/:username')
  hasSameUsername() {
    return 0;
  }
}
