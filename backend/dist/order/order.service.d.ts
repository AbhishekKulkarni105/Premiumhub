import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/auth/entities/user.entity';
import { UserService } from 'src/auth/user/user.service';
export declare class OrderService {
    private orderRepository;
    private userService;
    constructor(orderRepository: Repository<Order>, userService: UserService);
    create(id: string, createOrderDto: CreateOrderDto): Promise<{
        orderAmount: number;
        orderShippingDate: number;
        user: UserEntity;
    } & Order>;
    findAll(): Promise<Order[]>;
    findOne(id: number): void;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
