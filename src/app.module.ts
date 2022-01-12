import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';

// config
import { ConfigModule } from '@nestjs/config';

// entities
import { CustomerModule } from './customer/customer.module';
import { RoleModule } from './role/role.module';
import { ReservationModule } from './reservation/reservation.module';
import { WashModule } from './wash/wash.module';
import { VehicleModule } from './vehicle/vehicle.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    /* -----entitiy----- */
    ReservationModule,
    CustomerModule,
    RoleModule,
    WashModule,
    VehicleModule,
    /* ----------------- */
  ],
  controllers: [AppController],
})
export class AppModule {}
