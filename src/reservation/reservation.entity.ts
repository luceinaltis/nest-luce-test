import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Customer } from '../customer/customer.entity';
import { Wash } from '../wash/wash.entity';
import { Vehicle } from '../vehicle/vehicle.entity';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany((type) => Customer, (customer) => customer.reservation)
  customer: Customer;

  @OneToMany((type) => Wash, (wash) => wash.reservation)
  wash: Wash;

  @OneToMany((type) => Vehicle, (vehicle) => vehicle.reservation)
  vehicle: Vehicle;

  @Column()
  reservation_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
