/*
 * @Author: yangrongxin
 * @Date: 2022-09-23 11:34:32
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-09-23 15:06:59
 */
import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    // 获取来自请求体中的cookie
    console.log(request.cookies);
    return 'This action returns all cats';
  }
  @Post()
  // 通过接口给当前的页面设置cookie
  login(@Res({ passthrough: true }) response: Response) {
    response.cookie('userName', 'yangrongxin');
  }
}
