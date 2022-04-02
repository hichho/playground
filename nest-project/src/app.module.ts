import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { CatsController } from "./cats/cats.controller"
import { CatsService } from "./cats/cats.service"
import { LoggerMiddleware } from "./cats/logger.middleware"

/**
 * 根模块
 */

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes("cats")
  }
}
