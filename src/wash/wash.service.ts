import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Wash } from './wash.entity';

@Injectable()
export class WashService {
  constructor(
    @Inject('WASH_REPOSITORY')
    private washRepository: Repository<Wash>,
  ) {}

  async findAll(): Promise<Wash[]> {
    return this.washRepository.find();
  }
}
