import { Connection } from 'typeorm';
import { Wash } from './wash.entity';

export const washProviders = [
  {
    provide: 'WASH_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Wash),
    inject: ['DATABASE_CONNECTION'],
  },
];
