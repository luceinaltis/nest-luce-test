import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { customerProviders } from './customer.providers';
import { CustomerService } from './customer.service';

@Module({
  imports: [DatabaseModule],
  providers: [...customerProviders, CustomerService],
})
export class CustomerModule {}
