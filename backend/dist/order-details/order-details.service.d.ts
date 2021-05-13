import { UserService } from 'src/auth/user/user.service';
import { OrderService } from 'src/order/order.service';
import { ProductService } from 'src/product/product.service';
import { Repository } from 'typeorm';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { OrderDetail } from './entities/order-detail.entity';
export declare class OrderDetailsService {
    private orderDetailrepository;
    private userService;
    private orderService;
    private productService;
    constructor(orderDetailrepository: Repository<OrderDetail>, userService: UserService, orderService: OrderService, productService: ProductService);
    create(userId: string, productid: number, orderId: number, createOrderDetailDto: CreateOrderDetailDto): Promise<{
        orderAmount: number;
        orderQty: number;
        userId: import("../auth/entities/user.entity").UserEntity;
        orderId: import("../order/entities/order.entity").Order;
        productId: import("../product/entities/product.entity").Product;
    } & OrderDetail>;
    findAll(userId: string): Promise<OrderDetail[]>;
    findOne(id: number): Promise<OrderDetail>;
    update(id: number, updateOrderDetailDto: UpdateOrderDetailDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
