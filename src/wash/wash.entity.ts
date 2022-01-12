import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Reservation } from '../reservation/reservation.entity';

@Entity()
export class Wash {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Reservation, (reservation) => reservation.wash)
  reservation: Reservation;

  @Column({ length: 50, nullable: false })
  name: string;

  @Column({ type: 'decimal', nullable: false })
  latitude: number;

  @Column({ type: 'decimal', nullable: false })
  longitude: number;
}
