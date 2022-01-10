import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { ReservationModule } from './reservation/reservation.module';

@Module({
  imports: [AuthModule, ReservationModule],
  controllers: [AppController],
})
export class AppModule {}
