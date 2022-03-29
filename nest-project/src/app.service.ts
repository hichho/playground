import { Injectable } from '@nestjs/common';

/**
 * 基本服务
 */

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!!!';
  }
}
