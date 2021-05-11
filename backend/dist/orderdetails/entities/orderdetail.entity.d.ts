import { Order } from "src/orders/entities/order.entity";
import { Product } from "src/product/entities/product.entity";
import { UserEntity } from "src/auth/entities/user.entity";
export declare class Orderdetail {
    orderDetailId: number;
    quantity: number;
    itemAmount: number;
    orderShippingDate: Date;
    orderDate: Date;
    orderId: Order;
    productId: Product;
    user: UserEntity;
}
