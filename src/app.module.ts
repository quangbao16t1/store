import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { jwt_config } from './config/constants.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    JwtModule.register({
      secret: jwt_config.SECRET,
      signOptions: { expiresIn: jwt_config.EXPIRES_IN },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
