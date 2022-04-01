import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from "./cats.controller"

/**
 * 根模块
 */

@Module({
  imports: [],
  controllers: [AppController,CatsController],
  providers: [AppService],
})
export class AppModule {}
