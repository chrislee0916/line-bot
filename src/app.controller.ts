import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { SignatureValidateGuard } from './common/guards/signature-validate.guard';

@Controller()
@UseGuards(SignatureValidateGuard)
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
    ) {}

  @Get()
  getHello(): string {
    return 'hello, world'
  }

  @Post()
  async line(@Body() body){
    console.log('body', body.events)
    const { replyToken, message: {text}, source: {userId} } = body.events[0];
    let res = await this.appService.lineReply(replyToken, text,userId);
    return res
  }
}
