import { Address } from 'src/address/entities/address.entity';
import { Order } from 'src/order/entities/order.entity';
import { OrderDetail } from 'src/order-details/entities/order-detail.entity';
import { Payment } from 'src/payment/entities/payment.entity';
export declare class UserEntity {
    userId: string;
    userName: string;
    userEmail: string;
    userPassword: string;
    createdAt: Date;
    hashPassword(): Promise<void>;
    address: Address[];
    orderId: Order[];
    orderDetailId: OrderDetail[];
    paymentId: Payment[];
}
