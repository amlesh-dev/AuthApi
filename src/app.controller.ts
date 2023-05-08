import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from 'dto/user.dto';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() resisterUserDto: UserDto){
    let response = await this.authService.signup(resisterUserDto)
    console.log("response", response)
    return response
  }
  @Post('login')
  async login(@Body() loginUserDto: UserDto){
    let response = await this.authService.login(loginUserDto)
    return response
  }
  @UseGuards(AuthGuard)
  @Get('protected')
  async protected() {
    return "Access Granted"
  }
}
