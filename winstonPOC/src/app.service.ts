import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getLoggerInfo(): string {
    return 'Info message logged';
  }
  getLoggerError(): string {
    return 'Error message logged';
  }
  getLoggerDebug(): string {
    return 'Debug message logged';
  }

}
