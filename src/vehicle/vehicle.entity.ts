import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Reservation } from '../reservation/reservation.entity';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Reservation, (reservation) => reservation.vehicle)
  reservation: Reservation;

  @Column({ length: 50, nullable: false })
  name: string;

  @Column({ nullable: false })
  cost: number;
}
