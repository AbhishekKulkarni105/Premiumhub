import { UserEntity } from "src/auth/entities/user.entity";
import { Order } from "src/order/entities/order.entity";
import { Product } from "src/product/entities/product.entity";
export declare class OrderDetail {
    orderDetailId: number;
    orderAmount: number;
    orderQty: number;
    orderId: Order;
    productId: Product;
    userId: UserEntity;
}
