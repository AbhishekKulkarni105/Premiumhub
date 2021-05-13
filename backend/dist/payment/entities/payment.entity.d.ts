import { UserEntity } from "src/auth/entities/user.entity";
import { Order } from "src/order/entities/order.entity";
import { Product } from "src/product/entities/product.entity";
export declare class Payment {
    paymentId: number;
    paymentStatus: string;
    payAmount: number;
    paymentDate: Date;
    productId: Product;
    orderId: Order;
    userId: UserEntity;
}
