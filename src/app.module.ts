import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { MongooseModule } from '@nestjs/mongoose';
import { SignatureValidateGuard } from './common/guards/signature-validate.guard';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@localhost:${process.env.MONGO_PORT}/${process.env.MONGO_INITDB_DATABASE}`
      })
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    OrdersModule,
    UsersModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
