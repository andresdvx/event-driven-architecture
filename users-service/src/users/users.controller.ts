import { Body, Controller, Logger, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  private logger = new Logger('Users-Producer');
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async createUser(@Body() userData: any) {
    this.logger.log('Creating user - ', userData);
    return await this.usersService.createUser(userData);
  }
}
