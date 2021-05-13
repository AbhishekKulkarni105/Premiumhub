import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(req: any, createOrderDto: CreateOrderDto): Promise<{
        orderAmount: number;
        shippingDate: string;
        orderStatus: string;
        userId: import("../auth/entities/user.entity").UserEntity;
        productId: import("../product/entities/product.entity").Product;
    } & import("./entities/order.entity").Order>;
    findAll(req: any): Promise<import("./entities/order.entity").Order[]>;
    findOne(id: string): Promise<import("./entities/order.entity").Order>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
