import { UserEntity } from "src/auth/entities/user.entity";
import { Orderdetail } from "src/orderdetails/entities/orderdetail.entity";
export declare class Order {
    orderId: number;
    orderAmount: number;
    orderShippingDate: Date;
    orderStatus: string;
    orderDate: Date;
    user: UserEntity;
    orderdetail: Orderdetail[];
}
