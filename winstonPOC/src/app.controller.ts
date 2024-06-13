import {Controller, Get, Post, Body, Inject} from '@nestjs/common';
import { AppService } from './app.service';
import { LoggerService } from './logger/logger.service';


@Controller()
export class AppController {
  private readonly logger: LoggerService;

  constructor(private readonly appService: AppService, @Inject(LoggerService) logger: LoggerService) {
    this.logger = logger;
  }

  @Get('info')
  logMessage() {
    this.logger.info('This is a log message');
    return this.appService.getLoggerInfo()
  }

  @Get('error')
  errorMessage() {
    this.logger.error('This is an error message');
    return this.appService.getLoggerError()
  }


  @Get('debug')
  debugMessage() {
    this.logger.debug('This is a debug message');
    return this.appService.getLoggerDebug()
  }


}
