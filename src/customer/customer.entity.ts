import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Role } from '../role/role.entity';
import { Reservation } from '../reservation/reservation.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany((type) => Role, (role) => role.customer)
  role: Role;

  @ManyToOne((type) => Reservation, (reservation) => reservation.customer)
  reservation: Reservation;

  @Column({ length: 50 })
  username: string;

  @Column({ length: 50 })
  password: string;

  @Column({ length: 50 })
  salt: string;
}
