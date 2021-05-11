import { type } from 'node:os';
import { Order } from 'src/order/entities/order.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity({ name: 'payment' })
export class Payment {
    @PrimaryGeneratedColumn()
    paymentId: number;

    @Column({ nullable: false })
    paymentAmount: number;

    @Column({ type: "datetime", default: () => 'CURRENT_TIMESTAMP' })
    paymentDate: Date;

    @Column({ default: 'pending' })
    paymentStatus: string;

    @OneToMany(() => Order, (order) => order.orderId)
    order: Order[];

}
