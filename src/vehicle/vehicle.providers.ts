import { Connection } from 'typeorm';
import { Vehicle } from './vehicle.entity';

export const vehicleProviders = [
  {
    provide: 'VEHICLE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Vehicle),
    inject: ['DATABASE_CONNECTION'],
  },
];
