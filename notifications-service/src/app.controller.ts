import { Controller, Logger } from '@nestjs/common';
import { Ctx, KafkaContext, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  private readonly logger = new Logger('Notifications-Consumer');

  @MessagePattern('user-created')
  handleUserCreated(@Payload() message: any, @Ctx() context: KafkaContext) {
    try {
      const { event, data } = message;
      this.logger.debug('Message received from Kafka - Topic: ', context.getTopic());
      if (event === 'user.created') {
        console.log('User Created:', data);
      }
    } catch (error) {
      this.logger.error('Error Processing Message ', error);
    }
  }
}
