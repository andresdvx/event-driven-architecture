import { Injectable } from '@nestjs/common';
import { KafkaService } from 'src/kafka/kafka.service';

@Injectable()
export class UsersService {
  constructor(private readonly kafkaService: KafkaService) {}

  async createUser(userData: any) {
    await this.kafkaService.emit('user-created', {
      event: 'user.created',
      data: userData,
    });
    return userData;
  }
}
