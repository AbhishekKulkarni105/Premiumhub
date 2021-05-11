import { UserEntity } from 'src/auth/entities/user.entity';
import { Payment } from 'src/payment/entities/payment.entity';
import { Product } from 'src/product/entities/product.entity';
export declare class Order {
    orderId: number;
    orderAmount: number;
    orderDate: Date;
    orderShippingDate: Date;
    orderStatus: string;
    user: UserEntity;
    payment: Payment;
    product: Product[];
}
