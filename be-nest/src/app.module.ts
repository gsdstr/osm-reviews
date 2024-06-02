import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { JwtGuard } from './auth/guards/jwt.guard'
import { PlacesModule } from './places/places.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => ({
    //     type: 'postgres',
    //     host: configService.get<string>('DB_HOST'),
    //     port: configService.get<number>('DB_PORT'),
    //     database: configService.get<string>('DB_NAME'),
    //     password: configService.get<string>('DB_PASSWORD'),
    //     entities: [User],
    //     synchronize: true,
    //   }),
    //   inject: [ConfigService],
    // }),
    UsersModule,
    AuthModule,
    PlacesModule,
    ReviewsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
  ],
})
export class AppModule {}
