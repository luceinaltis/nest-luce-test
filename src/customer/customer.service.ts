import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @Inject('CUSTOMER_REPOSITORY')
    private photoRepository: Repository<Customer>,
  ) {}

  async findAll(): Promise<Customer[]> {
    return this.photoRepository.find();
  }
}
