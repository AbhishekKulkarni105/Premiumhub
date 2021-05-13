import { UserService } from 'src/auth/user/user.service';
import { ProductService } from 'src/product/product.service';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
export declare class OrderService {
    private orderRepository;
    private userService;
    private productService;
    constructor(orderRepository: Repository<Order>, userService: UserService, productService: ProductService);
    create(userId: string, productId: number, createOrderDto: CreateOrderDto): Promise<{
        orderAmount: number;
        shippingDate: string;
        orderStatus: string;
        userId: import("../auth/entities/user.entity").UserEntity;
        productId: import("../product/entities/product.entity").Product;
    } & Order>;
    findAll(userId: string): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
