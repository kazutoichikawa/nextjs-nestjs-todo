import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const logger = new Logger();
    logger.log('this is info log');
    logger.warn('this is warn log');
    logger.error('this is error log');

    return this.appService.getHello();
  }
}
