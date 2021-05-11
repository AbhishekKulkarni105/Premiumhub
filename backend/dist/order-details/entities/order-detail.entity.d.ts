import { Order } from 'src/order/entities/order.entity';
export declare class OrderDetail {
    orderId: number;
    productId: number;
    quantity: number;
    orderDate: Date;
    orderShippingDate: number;
    totalAmount: number;
    orderStatus: string;
    order: Order[];
}
