/*
 * @Author: yangrongxin
 * @Date: 2022-09-23 11:12:48
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-09-23 15:10:59
 */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 使用cookie-parser 模拟cookie的使用
  app.use(cookieParser('yangrongxin'));
  // 使用cors包来启用cors
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
