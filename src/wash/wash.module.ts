import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { washProviders } from './wash.providers';
import { WashService } from './wash.service';

@Module({
  imports: [DatabaseModule],
  providers: [...washProviders, WashService],
})
export class WashModule {}
