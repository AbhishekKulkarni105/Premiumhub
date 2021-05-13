import { Product } from './../../product/entities/product.entity';
import { UserEntity } from "src/auth/entities/user.entity";
import { OrderDetail } from "src/order-details/entities/order-detail.entity";
import { Payment } from "src/payment/entities/payment.entity";
export declare class Order {
    orderId: number;
    orderAmount: number;
    orderDate: Date;
    shippingDate: string;
    orderStatus: string;
    userId: UserEntity;
    productId: Product;
    orderDetailId: OrderDetail[];
    paymentId: Payment[];
}
