import { OrderDetailsService } from './order-details.service';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
export declare class OrderDetailsController {
    private readonly orderDetailsService;
    constructor(orderDetailsService: OrderDetailsService);
    create(req: any, createOrderDetailDto: CreateOrderDetailDto): Promise<{
        orderAmount: number;
        orderQty: number;
        userId: import("../auth/entities/user.entity").UserEntity;
        orderId: import("../order/entities/order.entity").Order;
        productId: import("../product/entities/product.entity").Product;
    } & import("./entities/order-detail.entity").OrderDetail>;
    findAll(req: any): Promise<import("./entities/order-detail.entity").OrderDetail[]>;
    findOne(id: string): Promise<import("./entities/order-detail.entity").OrderDetail>;
    update(id: string, updateOrderDetailDto: UpdateOrderDetailDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
