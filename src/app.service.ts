import { Client, ClientConfig, Message, MessageAPIResponseBase } from '@line/bot-sdk';
import { Injectable, UseGuards } from '@nestjs/common';
import { SignatureValidateGuard } from './common/guards/signature-validate.guard';

@Injectable()
export class AppService {
  clientConfig: ClientConfig = {
    channelAccessToken:'eyJhbGciOiJIUzI1NiJ9.NiQDKd77eyJ3XzvGC91TG8F9HHdb9xVM5Ww0y8fNe-8kUZdQlBiTiJC2PjTJwihmnTPV2YtbgOBeeGLzzY-GPhn5kwEvYaOqJovsNx0z7sl9yrK2wo7PKeFm602rtlV5.NfQcQtk55N0vvOGLa152969iBEs_nW1mVh3ZO6QeMDc',
    channelSecret:'3253c77038bb166c76ddd48a5d420ca3'
  }
  client = new Client(this.clientConfig)

  async lineReply(replyToken: string, text: string, userId: string): Promise<MessageAPIResponseBase>{
    let messages: Message[] = [
      {
        type: 'text',
        text: 'hello, 你說的是'+text
      },
      {
        type: 'text',
        text: 'userID: '+userId,
      }
    ];
    return this.client.replyMessage(replyToken, messages);
  }
}
