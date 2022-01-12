import { Module } from '@nestjs/common';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';
import { reservationProviders } from './reservation.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ReservationController],
  providers: [ReservationService, ...reservationProviders],
})
export class ReservationModule {}
