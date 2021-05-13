import { OrderDetail } from 'src/order-details/entities/order-detail.entity';
import { Order } from 'src/order/entities/order.entity';
import { Payment } from 'src/payment/entities/payment.entity';
export declare class Product {
    productId: number;
    productName: string;
    productPrice: number;
    productImage: string;
    productSalePrice: number;
    productStock: number;
    paymentId: Payment[];
    orderId: Order[];
    orderDetailId: OrderDetail[];
}
