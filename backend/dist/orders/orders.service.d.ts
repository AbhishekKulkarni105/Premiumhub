import { UserService } from 'src/auth/user/user.service';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
export declare class OrdersService {
    private orderRepository;
    private userService;
    constructor(orderRepository: Repository<Order>, userService: UserService);
    create(uid: string, createOrderDto: CreateOrderDto): Promise<{
        orderAmount: number;
        orderShippingDate: string;
        orderDate: string;
        user: import("../auth/entities/user.entity").UserEntity;
    } & Order>;
    findAll(uid: string): Promise<Order[]>;
    findOne(uid: string, id: number): Promise<Order>;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}